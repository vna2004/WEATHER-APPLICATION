# WEATHER-APPLICATION

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: VEENA MADHURE

*INTERN ID*: CT6WJKG

*DOMAIN*: Mern Stack Web Development

*DURATION*: 6 WEEKS

*MENTOR*: NEELA SANTOSH

##Description:
This Weather App is an intuitive and interactive application designed to provide real-time weather updates for any city in the world. Built with React and Material-UI, this app offers a clean user interface that combines functionality and visual appeal, making it both user-friendly and engaging.
*1. WeatherApp Component*
The WeatherApp component serves as the main hub of the application, tying all the other components together. It maintains the core state of the app using React's useState hook.

State Management: The state holds the weather details, such as the city name, current temperature, humidity, weather conditions, and more. Initially, the state is set with placeholder data for Delhi, offering a default display for first-time users.
Dynamic Updates: A function updateInfo is passed down to child components, allowing seamless state updates when a user searches for a new city.

*2. SearchBox Component*
The SearchBox is where users interact to find weather information. This component:

Accepts Input: A TextField input allows users to enter the city name they wish to search for.
API Integration: On submission, the app fetches weather data from the OpenWeatherMap API using the entered city name and displays real-time weather details.
Error Handling: If a city name is invalid or doesn't exist, an error message appears, guiding users to input valid data.
Styling: Buttons and error messages are styled with Material-UI components, enhancing user experience.

*3. InfoBox Component*
The InfoBox component is responsible for presenting the weather information in an aesthetically pleasing way.

Card Layout: Using Material-UI Card components, the app displays weather details in an organized and visually appealing format.
Dynamic Images: Depending on the weather conditions (e.g., high humidity, hot temperature, or cold temperature), the app dynamically selects relevant background images to provide a more immersive experience.
Icons: Weather icons like suns, clouds, and thunderbolts are conditionally rendered for a polished and intuitive UI.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

##Conclusion: The React Weather App is a testament to how a simple yet thoughtfully designed application can transform the way users interact with weather data. Its clean architecture, efficient state management, and engaging UI make it both practical and delightful to use. Perfect for anyone seeking real-time weather updates, this app exemplifies the power of React in building dynamic and responsive applications.
