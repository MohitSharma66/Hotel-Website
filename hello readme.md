# IITB SaaS Project

Our project is a SaaS (Software as a Service) project within IITB, utilizing their network.

## Time Period
The time period covered by this report is from **23rd September to 27th September**.

## Tasks Completed
1. **Shopping Cart Page**: 
   - Designed and implemented a shopping cart page using React. The layout follows the format provided in the image below:
   
   <img width="529" alt="Screenshot 2024-09-24 at 2 51 15 AM" src="https://github.com/user-attachments/assets/350de066-9318-4d66-a98a-3fc34ea96cc5">

   - The UI includes product information, quantity controls, save-for-later functionality, and order summary details (price, discounts, delivery, etc.).

2. **Flag Variable for Stock Availability**:
   - Implemented a flag variable `isAvailable` to handle product availability. Products that are out of stock will not be added to the cart.
   - Fixed some UI issues on the page.
   - Updated `products.json` to align with the `products` schema, ensuring consistency in product data management.

3. **Checkout Page**:
   - Developed a checkout page using React. The UI design is user-friendly and allows for address selection, with a flag variable `isSelected` to toggle between different addresses. The layout follows the format provided in the image below:

   <img width="608" alt="Screenshot 2024-09-26 at 2 59 09 AM" src="https://github.com/user-attachments/assets/4d8df8ca-4444-4adb-972a-aac3fe02088f">

   - Connected the checkout page to the shopping cart page via the "Order Now" button.
   - Created a price detail section that is shared between the shopping cart and checkout pages, displaying product prices and discounts.

## Challenges Faced
- Designing a **unique UI** for both the shopping cart and checkout pages while maintaining functionality and ensuring a seamless user experience.
- Displaying **product price details** from the shopping cart on the checkout page and ensuring consistency across both pages.

## Next Steps / Goals
- **Short-term goals**: Continue working on and designing other pages for the project.
- **Long-term goals**: Work towards making the SaaS project fully functional, connecting all parts of the project, and ensuring a seamless user experience.

## Key Learnings
- Learned how to store data effectively in `.json` files for use in React.
- Gained experience in designing unique user interfaces, utilizing animations, scaling techniques, and Material-UI (MUI) components.
- **Component Reusability**: Reduced redundancy by reusing components from other pages (e.g., the price detail section for both shopping cart and checkout pages).

## Conclusion
The three tasks assigned during this period have been completed. I am handling the frontend development of the project and will continue to work on further components.
