import React from "react";
import TooltipSidebarModal from "./components/TooltipSidebarModal";

function App() {

  const mockTextBody = "JavaScript is a high-level, interpreted programming language primarily used for creating interactive web pages and web applications. It was originally developed by Brendan Eich at Netscape in 1995 and has since become one of the most widely used programming languages. JavaScript is known as a client-side scripting language, meaning it runs on the user's web browser rather than on the web server. It is supported by all modern web browsers and allows developers to add dynamic functionality to web pages. With JavaScript, you can manipulate the HTML structure, modify CSS styles, handle user events, and perform various operations on data."

  const mockTextBodyTwo = `Component-based architecture: React follows a component-based approach, where the user interface is broken down into small, self-contained components. Each component can have its own logic, state, and properties, making it easier to manage and reuse code.
  Virtual DOM: React utilizes a virtual representation of the Document Object Model (DOM) called the "Virtual DOM." Instead of directly manipulating the actual DOM, React updates a lightweight copy of it and efficiently applies the necessary changes to the real DOM. This approach improves performance and helps minimize unnecessary re-rendering of components.`

  const mockTestBodyThree = "Facebook is a social media and technology company founded by Mark Zuckerberg, Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes in 2004. Initially launched as a platform for Harvard University students, Facebook quickly expanded to other universities and eventually opened to the general public in 2006."

  const mockTextBodyFour = "You should consider using Jest as your testing framework because it offers a powerful and comprehensive set of features that make testing JavaScript applications a breeze. With Jest, you can quickly set up and run tests, benefiting from its efficient test runner, built-in assertion library, and intuitive API. It supports various testing approaches, such as unit testing, integration testing, and snapshot testing. Jest's mocking capabilities enable you to isolate components and dependencies, facilitating thorough and reliable testing. It also provides features like code coverage analysis, parallel test execution, and snapshot testing, which help catch bugs, detect regressions, and ensure the quality of your codebase. Overall, Jest's ease of use, speed, and extensive feature set make it an excellent choice for JavaScript testing, enabling you to write robust and reliable tests to improve the overall quality of your applications."

  return (
    <div className="App">
      <h1>Tooltip Sidebar Modal - Interview Task</h1>
      <h2>Usage</h2>
      <p>

        The Tooltip Sidebar Modal is a user interface component that can be beneficial for individuals who frequently use a particular service or application. Its purpose is to offer additional context or detailed explanations for technical or industry-specific terms within the user interface.

        Regular users of a service somtimes can often encounter terms or concepts that may be unfamiliar or require further clarification. In such cases, a Tooltip Sidebar Modal can be a valuable tool for enhancing user understanding and improving their overall experience.

        When a user interacts with a specific term or element within the user interface, the component is triggered, displaying relevant information related to that particular item.
      </p>
      <h2>Examples</h2>
      <h4>Tooltip Sidebar Modal - With Hyper Link</h4>
      <p>TypeScript is a programming language that extends JavaScript by adding static typing to it. It is a superset of <TooltipSidebarModal informationText={mockTextBody} isHyperLink title="JavaScript" subTitle="What is JavaScript" hyperLinkText="JavaScript" />, which means that any valid JavaScript code is also valid TypeScript code. TypeScript introduces new features and syntax to JavaScript and provides additional tools for developers to enhance their productivity and catch potential errors during the development process.?
      </p>

      <h4>Tooltip Sidebar Modal With Icon </h4>
      <p>
      React is an open-source JavaScript library for building user interfaces. It was developed by Facebook and released in 2013. React is widely used for building dynamic and interactive web applications. <TooltipSidebarModal informationText={mockTextBodyTwo} title="React Extended" subTitle="Key features and concepts of React include" hyperLinkText="" />
      </p>

      <h4>Tooltip Sidebar Modal With Both </h4>
      <p>
      Jest is a popular JavaScript testing framework developed by <TooltipSidebarModal informationText={mockTestBodyThree} title="Facebook" subTitle="What is Facebook?" hyperLinkText="Facebook" isHyperLink />. It is designed to provide a simple and efficient way to write tests for JavaScript applications, including web applications, Node.js projects, and other JavaScript codebases. <TooltipSidebarModal informationText={mockTextBodyFour} title="Jest" subTitle="Why should i use Jest?" hyperLinkText="" />
      </p>
    </div>
  );
}

export default App;
