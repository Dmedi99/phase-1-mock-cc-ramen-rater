document.addEventListener("DOMContentLoaded", function() {
    fetch('http://localhost:3000/ramens')
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch URL data');
        }
      })
      .then(function(ramenData) {
        const ramenMenu = document.getElementById('ramen-menu');
        const ramenDetail = document.getElementById('ramen-detail');
        const ratingDisplay = document.getElementById('rating-display');
        const commentDisplay = document.getElementById('comment-display');
  
        ramenData.forEach(function(ramen) {
          const ramenImg = document.createElement('img');
          ramenImg.src = ramen.image;
  
          // Add a click event listener to each ramen image
          ramenImg.addEventListener('click', function() {
            // Update the ramen details in #ramen-detail
            ramenDetail.innerHTML = '';
            const image = document.createElement('img');
            image.src = ramen.image;
            const name = document.createElement('h2');
            name.textContent = ramen.name;
            const restaurant = document.createElement('h3');
            restaurant.textContent = ramen.restaurant;
  
            ramenDetail.appendChild(image);
            ramenDetail.appendChild(name);
            ramenDetail.appendChild(restaurant);
  
            // Update the rating and comment displays
            ratingDisplay.textContent = ramen.rating;
            commentDisplay.textContent = ramen.comment;
          });
  
          // Append the ramen image to the #ramen-menu div
          ramenMenu.appendChild(ramenImg);

          
        });
      })
      .then(function(){
        const newRamenForm = document.getElementById('new-ramen');

        newRamenForm.addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent form submission
        
          // Get the values from the form inputs
          const nameInput = document.getElementById('new-name');
          const restaurantInput = document.getElementById('new-restaurant');
          const imageInput = document.getElementById('new-image');
          const ratingInput = document.getElementById('new-rating');
          const commentInput = document.getElementById('new-comment');
        
          const name = nameInput.value;
          const restaurant = restaurantInput.value;
          const image = imageInput.value;
          const rating = ratingInput.value;
          const comment = commentInput.value;
        
          // Create a new ramen object
          const newRamen = {
            name: name,
            restaurant: restaurant,
            image: image,
            rating: rating,
            comment: comment
          };
        
          // Add the new ramen to the ramen menu
          const ramenMenu = document.getElementById('ramen-menu');
          const newRamenImg = document.createElement('img');
          newRamenImg.src = newRamen.image;
        
          // Add a click event listener to the new ramen image
          newRamenImg.addEventListener('click', function() {
            const ramenDetail = document.getElementById('ramen-detail');
            const image = ramenDetail.querySelector('.detail-image');
            const name = ramenDetail.querySelector('.name');
            const restaurant = ramenDetail.querySelector('.restaurant');
        
            image.src = newRamen.image;
            name.textContent = newRamen.name;
            restaurant.textContent = newRamen.restaurant;
        
            ratingDisplay.textContent = newRamen.rating;
            commentDisplay.textContent = newRamen.comment;
          });
        
          ramenMenu.appendChild(newRamenImg);
        
          // Clear the form inputs
          nameInput.value = '';
          restaurantInput.value = '';
          imageInput.value = '';
          ratingInput.value = '';
          commentInput.value = '';
        });  
      })
      .catch(function(error) {
        console.error(error);
      })})

      
