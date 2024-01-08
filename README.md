# React + TypeScript + Vite

# DynamicForm Component

This React component is designed to create dynamic forms using React, Redux Toolkit, Vite, React Hook Form, and Styled Components. The component handles form rendering, validation, submission, and updates the global form state using Redux.

### Features

Dynamic form rendering based on the provided fields structure.

Integration with React Hook Form for form control and validation.

Styled with Styled Components for a consistent and customizable UI.

Form data formatting and submission through Redux Toolkit.

Responsive layout with mobile-friendly styling.

### Props for the form and inputs

**name**: Specifies the name attribute for the input field. This is required for React Hook Form integration.

**isMobile**: identifies the screen width.

**control**: Passes the control object from React Hook Form to enable form control and validation.

**fields**: fields to render.

```
{
  "fields": [
    [
      {
        "id": "firstName",
        "placeholder": "First name",
        "required": true,
        "type": "text"
      },
      {
        "id": "lastName",
        "placeholder": "Last name",
        "required": true,
        "type": "text"
      }
    ],
    {
      "id": "Email",
      "placeholder": "Email",
      "required": true,
      "type": "text"
    },
    {
      "id": "address1",
      "placeholder": "Address 1",
      "required": false,
      "type": "text"
    },
    [
      {
        "id": "city",
        "placeholder": "City",
        "required": false,
        "type": "text"
      },
      {
        "id": "state",
        "placeholder": "State",
        "required": false,
        "type": "text"
      },
      {
        "id": "zip",
        "placeholder": "Zip",
        "required": false,
        "type": "text"
      }
    ],
    {
      "id": "phone",
      "placeholder": "Phone",
      "required": true,
      "type": "text"
    },
    {
      "id": "jobTitle",
      "options": [
        "Engineer - lead",
        "Engineer - mid level",
        "Engineer - junior",
        "Engineer - front end focused",
        "Engineer - backend focused",
        "Engineer - full stack"
      ],
      "required": false,
      "placeholder": "Please select job title",
      "type": "select"
    },
    {
      "id": "reason",
      "placeholder": "Describe why you are a good fit for the job you are applying for.",
      "required": false,
      "type": "textarea"
    }
  ]
}

```

# Usage

```
import React from 'react';
import DynamicForm from './path-to-your-DynamicForm-component'; // Adjust the path

const YourComponent = () => {
  // Define your form fields structure
  const formFields = /* Your form fields structure */;

  return (
    <div>
      <DynamicForm fields={formFields} />
    </div>
  );
};

export default YourComponent;
```

## Installation

type `yarn` to install all the depencies

## Run the app locally

type `yarn dev` to run the vite script

## Testing

type `yarn test` to run the **_vitest_** script for testing enviroment or `yarn test --coverage` and get information about the testing coverage
