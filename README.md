# @open-tech-world/react-form

> Create forms in React.

## Install

```bash
# With npm
$ npm install @open-tech-world/react-form

# With yarn
$ yarn add @open-tech-world/react-form
```

## Usage

```jsx
import { Form, Field } from '@open-tech-world/react-form';

export default function myForm() {
  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <Form onSubmit={handleSubmit} initialValues={{}}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
```

## License

MIT © [open-tech-world](https://github.com/open-tech-world)
