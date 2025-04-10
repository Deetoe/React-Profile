import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateEmail = email =>
    /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);

  const handleBlur = e => {
    const { name, value } = e.target;
    if (!value) setErrors(prev => ({ ...prev, [name]: 'This field is required' }));
    else if (name === 'email' && !validateEmail(value))
      setErrors(prev => ({ ...prev, email: 'Invalid email address' }));
    else setErrors(prev => ({ ...prev, [name]: null }));
  };

  return (
    <form className="space-y-4">
      {['name', 'email', 'message'].map(field => (
        <div key={field}>
          <input
            type={field === 'email' ? 'email' : 'text'}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            onBlur={handleBlur}
            onChange={e => setForm({ ...form, [field]: e.target.value })}
            className="border p-2 w-full"
          />
          {errors[field] && <p className="text-red-500">{errors[field]}</p>}
        </div>
      ))}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}