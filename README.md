# Horizone

Horizone is an AI-driven hotel booking platform that revolutionizes the search and reservation process. Using OpenAI's language model, it allows users to provide their hotel preferences and receive tailored recommendations. The platform’s goal is to streamline the hotel selection process, offering personalized options that match the unique needs of each user, ultimately making the booking experience faster and more intuitive.

![](https://pub-a68d0c01397443d094d3236b5e9b30cf.r2.dev/portfolio-images/aedf30ba8d7d9151659a1472662a0a2412301b842ff6298c1cdd2c9c95ed7b61.jpg?versionId=7e6a340e2a7cf625f2843cecc98c911a)---

# 🤔 Problem Space

### Problems to Solve/Requirements to Create

Horizone is an AI-powered hotel booking platform that allows users to input their preferences and receive personalized hotel recommendations. The challenges faced include ensuring fast and seamless user interactions, maintaining real-time hotel data, implementing effective AI-driven recommendations, and securing user information throughout the booking process.

### 👉 **Problem: Slow AI-Based Recommendations**

#### **Problem Statement:**

Generating personalized hotel recommendations using AI can be slow, especially when processing a large number of user preferences and hotel options. This delay in fetching results can cause user frustration and lower engagement.

#### **Current Solution:**

We integrated **OpenAI's GPT-4o** to generate personalized hotel recommendations based on user preferences. To speed up the process, we use **pre-calculated recommendation caching** for frequently requested preferences and **batch processing** for high-demand search results.

#### **How do we know it is a problem:**

- **User feedback:** Users report delays when receiving hotel recommendations based on their input.

- **Metrics:** Increased abandonment rates after submitting preferences.

- **Evidence:** Performance logs show long processing times when AI is involved in fetching hotel recommendations.

### 👉 **Problem: Complex User Authentication and Authorization**

#### **Problem Statement:**

Managing user authentication and secure access to personalized features, such as booking history, payments, and preferences, is critical for a seamless experience. Poorly managed authentication can cause issues with session expiration or user data leakage.

#### **Current Solution:**

We use **Clerk** for authentication, ensuring secure login and session management. Additionally, **role-based access control** (RBAC) ensures only authorized users can access certain features.

#### **How do we know it is a problem:**

- **User feedback:** Users report problems accessing personalized features after logging in.

- **Metrics:** Increased logout rates and failed attempts to access restricted pages.

- **Evidence:** Logs indicate frequent session expiration and failed authentications on user profile pages.

### 

---

## Why solve these problems?

- **Reason 1:** Improving recommendation speed, booking accuracy enhances the user experience, leading to higher user engagement, better conversions, and fewer abandoned transactions.
- **Reason 2:** Ensuring secure authentication and data handling fosters trust and builds long-term relationships with users.

**User Satisfaction Matrix**

- **Current State:** Users experience slow loads, booking errors, authentication issues, and other problems

- **Desired State:** After solving these problems, users will enjoy fast hotel searches, seamless bookings, and a smooth personalized experience.

---

## Goals

### **Company objective 🎯**

💡 The main company objective is to streamline and enhance the hotel booking process through an AI-driven platform, providing users with personalized recommendations and an efficient, user-friendly experience. The goal is to improve both the booking journey for customers and the management process for hotel admins.

**Project Goals**

- **Project goal:** Build an AI-powered hotel booking platform using the MERN stack, with personalized recommendations provided by OpenAI’s LLM to enhance users' decision-making process.

- **Project goal:** Develop an intuitive, efficient admin dashboard that simplifies hotel management, ensuring that hotel admins can manage hotel listings with ease.

---

## User Stories

### **User Type: Visitor**

The Visitor is someone looking to book a hotel for their trip. They are browsing the platform to find suitable accommodation options.

- **Goals:** Find hotels that match their preferences, such as location, price range, and amenities.

- **Needs:** Ability to filter search results based on different criteria and personalized recommendations powered by AI.

- **Other Characteristics:** Visitors may be first-time users or repeat customers seeking accommodations tailored to their specific preferences or past experiences.

### **User Type: Admin**

The Admin is responsible for managing hotel listings and overseeing booking-related tasks.

- **Goals:** Approve and manage hotel listings, monitor booking statuses, and ensure accurate data for customers.

- **Needs:** A user-friendly and efficient interface to create and manage hotel listings

- **Other Characteristics:** Admins are responsible for creating new hotel listings and managing other hotel-related details.

---

# 🌟 Design space 

## **UI Design**

The UI design focuses on creating a seamless user experience, emphasizing easy navigation and intuitive interactions. Key features include:

1. **Home Page:** Introduction to Horizone, highlighting AI-driven features and a clear call-to-action for users to sign up or explore.

2. **User Flow:**

   - Sign up or log in to access personalized recommendations and services.

   - Customize preferences for hotel searches based on user input.

   - Browse through AI-powered recommendations and finalize bookings.

3. **Admin Flow:**

   - Login → Access the admin dashboard.

   - View a list of user bookings and hotel information.

   - Take actions like adding new hotels, updating details, or managing bookings.

## **Low-fidelity Wireframe**

**Design Concept**\
The core design concept for **Horizone** is centered on simplicity, clarity, and ease of navigation. The platform aims to provide a seamless user experience for both hotel guests and admins. The design focuses on a clean interface with easy access to hotel search, booking, and management features.

- **For users:** The flow starts with a homepage showcasing hotel listings, then allows users to search and filter hotels with ease. The booking process is straightforward with clear steps.

- **For admins:** The dashboard offers a simple, efficient layout with hotel management tools, booking status updates, and performance metrics.

## **Wireframes**

![](https://pub-a68d0c01397443d094d3236b5e9b30cf.r2.dev/portfolio-images/8b960b234d399bdfd411a4ebfaf93451fe0a8fa3a25c4b463699f6c98fb95c84.jpg?versionId=7e6a33dd8bec9b4b321575036c1b933c)**✍️ Home Page Wireframe**

- Top section: Logo, navigation buttons (Sign in, Sign up)

- Large hero banner describing platform features with **AI Search** Form

![](https://pub-a68d0c01397443d094d3236b5e9b30cf.r2.dev/portfolio-images/d1e3a27305b5be3322be02b57c1ca34dff8868b3f2dab5532e987b19ef9bcf2a.jpg?versionId=7e6a33dd7d77b91c4d2d291c0c561748)**✍️ Hotel Listings Component Wireframe**

- Top Section: Navigate between other locations (Location Tab)

- Hotel Cards

![](https://pub-a68d0c01397443d094d3236b5e9b30cf.r2.dev/portfolio-images/f208f3a212acb085b755edeb8362b134bec3e1e79c72ca24f5f5a8c9d16f7f80.jpg?versionId=7e6a33dd274a8a61ec808072024f88da)**✍️ Hotel Page Wireframe**

- Hotel Image with All Hotel Details

- Booking Button and Booking features

![](https://pub-a68d0c01397443d094d3236b5e9b30cf.r2.dev/portfolio-images/a336145dd0abd6db57a7bf27aed53406ef6c568fdea1206e5edcfdf86fee0785.jpg?versionId=7e6a33dc5dd3cc01f81ce643d5e5d332)**✍️ User Account Page Wireframe**

- User Account Details Section with including privacy details (Email)

- All Booking Details and reject button

---

# Development Phase 

## Technology Stack Selection


### ** Frontend - React.js with RTK Query**

### **Why React.js?**

- **Component-Based Architecture**: Enables reusable UI components, making the frontend modular and maintainable.
- **Efficient UI Updates**: Uses a virtual DOM for faster rendering and smooth user interactions.
- **Rich Ecosystem**: Vast library support and active community ensure continued improvements.

### **Why RTK Query for Data Fetching?**

- **Efficient Data Fetching**: RTK Query simplifies data fetching with minimal boilerplate code. It streamlines API integration for actions like searching for hotels, fetching hotel details, or managing bookings, which improves the overall development speed.

- **Automatic Caching**: RTK Query automatically caches data and only refetches when required, which improves performance by reducing redundant API calls, especially when displaying static hotel information or previously searched results.

- **Optimized for Redux**: As part of the Redux Toolkit, RTK Query integrates seamlessly with Redux, providing a structured and powerful way to handle server-side data fetching while maintaining consistent application state.

- **Error Handling & Retries**: RTK Query comes with built-in error handling and retry logic for failed API calls, ensuring a more resilient user experience, especially during peak times or unstable network conditions.  

### **Backend - Node.js with Express**

- **Why Node.js?**

  - **Asynchronous and Non-blocking**: Node.js handles concurrent requests efficiently using its event-driven, non-blocking I/O model, making it ideal for real-time applications like Horizone.

  - **Single Language (JavaScript)**: Using JavaScript on both the frontend (React) and backend (Node.js) provides a unified language, simplifying development and communication between the two layers.

  - **Scalability**: Node.js is known for its scalability and can handle large numbers of requests, which is beneficial when Horizone scales up with increasing users and hotel data.

- **Why Express.js?**

  - **Simplified Routing**: Express.js provides a minimal, unopinionated framework for routing, making it easy to structure and manage API endpoints for various functionalities (e.g., hotel search, booking management, etc.).

  - **Middleware Support**: Express allows easy integration of middleware for validation, error handling, authentication, and logging, which is essential for building a secure and maintainable backend.

  - **Flexibility**: Express is lightweight yet flexible, allowing the integration of various third-party libraries like Clerk for authentication, and custom middleware to meet specific application needs.

### **AI Integration - OpenAI GPT-4o**

#### **Why OpenAI GPT-4o?**

- **Personalized Recommendations**: GPT-4o helps deliver tailored hotel recommendations based on user preferences (such as location, price range, and amenities). This creates a more personalized booking experience.

- **Advanced Natural Language Processing (NLP)**: OpenAI’s GPT-4o can understand and generate human-like text, allowing it to process user queries effectively and provide conversational interactions, making it ideal for handling complex booking requests or FAQs.

- **Context-Aware Insights**: GPT-4o can provide contextual recommendations by analyzing users' inputs, improving accuracy in suggesting relevant hotels and offers.

- **Scalability**: GPT-4o handles multiple concurrent interactions, which is essential for a high-traffic hotel booking platform with many users seeking real-time recommendations.

### **User Authentication - Clerk Authentication**

#### **Why Clerk Authentication?**

- **Built-in User Management**: Clerk provides a comprehensive authentication system that includes sign-ups, logins, and secure session management out of the box, which saves time and effort in building custom solutions.

- **Integration with Modern Apps**: Clerk’s easy integration with React allows for seamless authentication flows, making it a good choice for Horizone’s needs.

- **Security and Compliance**: Clerk ensures security features like password hashing and multi-factor authentication, which are critical for safeguarding sensitive user data.

## **High-Level Architecture Diagram**

**Architecture Diagram Description:**

The architecture of Horizone is built around a **Client-Server Model** with distinct separation of concerns between the frontend, backend, and AI integration.

![](https://pub-a68d0c01397443d094d3236b5e9b30cf.r2.dev/portfolio-images/7ca9af1a3d7af6349dba6442c31c4a8b93d3d58ed43d4a9c02dad09a24c1b966.jpg?versionId=7e6a33cd8abe101e4e14e2d3a95e5782)

## Entity-Extended Relationship Diagram

![](https://pub-a68d0c01397443d094d3236b5e9b30cf.r2.dev/portfolio-images/74d53c432817220f1bdf3f822e5ffebc43fbd865057f010d26db7294e49fe70f.jpg?versionId=7e6a33cd4594ee5c4d35060ae686318a)

### **Frontend (React.js + Tailwind CSS)**:

The frontend is responsible for providing an interactive user interface for the hotel booking process. Users can browse hotels, input their preferences, and view personalized recommendations. React.js ensures efficient rendering of the UI, while Tailwind CSS is used for styling, ensuring a responsive and visually appealing design that adapts to various screen sizes. The frontend communicates with the backend through RESTful API calls to fetch hotel data, recommendations, and booking information.

### **Backend (Node.js + Express.js)**:

The backend is built with Node.js and Express.js, handling the logic for searching hotels, processing user preferences, managing bookings, and communicating with the AI recommendation system. The backend exposes RESTful APIs that allow the frontend to interact with the hotel data, user profiles, and booking functionalities. Express.js is used for routing, middleware management, and efficient error handling, while Node.js provides a scalable server-side environment for processing requests.

### **Database (MongoDB)**:

MongoDB is used to store dynamic and evolving data such as user profiles, hotel details, booking history, and preferences. Its NoSQL structure is ideal for handling various types of data that can change over time (e.g., new hotels, changing availability). The flexibility of MongoDB allows Horizone to scale effectively while providing fast read and write operations, crucial for managing the real-time nature of a hotel booking platform.

### **AI Integration (OpenAI GPT-4o)**:

OpenAI’s GPT-4o is integrated into the backend to provide personalized hotel recommendations based on user preferences, such as location, budget. The AI processes user input and generates tailored suggestions to help users make more informed decisions. By leveraging GPT-4o’s natural language processing capabilities, the system can handle complex user queries, providing a smooth, interactive experience for users searching for hotels.

## Key Features of the Software

### **Personalized Hotel Recommendations (AI-Powered)**

**Decision:** Used OpenAI’s GPT-4o to provide personalized hotel recommendations, enhancing the user experience by tailoring suggestions based on specific preferences.

**Implementation:**

- Integrated **OpenAI GPT-4o** into the backend to process user preferences like location, price range, and needs.

- The AI suggests personalized hotel options in real-time, helping users find accommodations that match their needs quickly and efficiently.

### **User Authentication (Clerk Authentication)**

**Decision:** Used Clerk Authentication to handle user authentication, ensuring secure login, registration, and session management for users and admins.

**Implementation:**

- Integrated **Clerk Authentication** for secure user sign-up, login, and session management, with options for email/password and social logins.

- Enabled **multi-factor authentication (MFA)** and **password hashing** to ensure a high level of security for user accounts.

### **Filter Functionality**

**Decision:** Implemented a flexible filter system to allow users to refine hotel search results based on criteria such as location.

**Implementation:**

- Users can filter search results using dynamic filters like **location**

- Real-time filtering updates the search results without reloading the page, providing a smooth browsing experience.

### **Frontend UI (React.js + Tailwind CSS + Shadcn UI)**

**Decision:** Used React.js for building a dynamic and interactive UI, with Tailwind CSS for styling and Shadcn UI for reusable UI components.

**Implementation:**

- Built dynamic components like hotel listings, filters, and booking forms using **React.js**.

- Styled and customized components with **Tailwind CSS** to ensure responsiveness and a mobile-friendly design.

- Leveraged **Shadcn UI** to create consistent, reusable UI elements such as buttons, modals, and input fields for a polished, user-friendly interface.

### **User Profile Management and Booking History**

**Decision:** Provided users with the ability to manage their profiles and view their booking history, creating a personalized and convenient user experience.

**Implementation:**

- Users can create and manage their profiles, including personal details and preferences.

- A **booking history** feature allows users to review past reservations and reject previous bookings.

---

# Challenges Faced and Solutions 

### **Problem 1:** 

#### **Slow Response Time in AI-Driven Features**

The AI-driven features in Horizone, especially the real-time hotel recommendations and user preferences processing, experienced slow response times due to multiple API calls and complex data handling.

### **Solution 1:**

To solve this, I optimized the backend by:

1. **Asynchronous Processing:** Implemented asynchronous functions for handling AI-driven recommendations and processing, ensuring that responses are handled in parallel without blocking other processes.

### **Problem 2:** 

#### Managing Complex User Authentication

Ensuring smooth user authentication while maintaining security standards for multiple user sessions and login flows was a complex task.

### **Solution 2:**

To address this, I integrated **Clerk Authentication** to handle all aspects of user management:

1. **Secure Authentication:** Used Clerk for secure sign-ups, logins, and session management with built-in multi-factor authentication (MFA) to enhance security.

2. **Session Expiry Management:** Clerk ensured seamless handling of session expiration, reducing user friction during the login process.

 

# Future Vision / next steps

#### **Long-Term Vision**

- **AI-Powered Personalization:**\
  Integrate advanced AI models to provide even more personalized hotel recommendations based on user behavior, past bookings, and preferences.

- **Expanded Multi-Language Support:**\
  Enhance Horizone’s accessibility by supporting multiple languages, ensuring a global user base can easily navigate the platform.

- **Improved Mobile Experience:**\
  Develop a mobile-first approach with a dedicated app for a smoother and more efficient booking experience on mobile devices.

#### **Activities for Version 2 (V.2)**

- **Real-Time Hotel Availability Notifications:**\
  Implement real-time booking notifications to inform users instantly when hotel availability changes or when new rooms are listed.

- **User Profiles & Wishlist Feature:**\
  Allow users to create profiles, save their favorite hotels, and maintain wishlists for easy access to previously browsed properties.

- **Payment Gateway Integration:**\
  Implement secure payment integrations for seamless hotel bookings directly through the platform.

#### **Activities for Version 3 (V.3)**

- **AI Chatbot for Customer Support:**\
  Introduce an AI-powered chatbot using OpenAI to handle booking-related questions, provide assistance, and offer personalized recommendations.

- **User Reviews and Ratings System:**\
  Allow users to leave reviews and rate hotels, helping future guests make informed decisions based on past experiences.

- **Dynamic Pricing Model:**\
  Introduce a dynamic pricing feature that adjusts hotel room prices based on demand, offering promotions or discounts during peak seasons.
