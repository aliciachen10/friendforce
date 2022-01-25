import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_FRIEND, LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

import ffLogo from '../../img/ff.png';

function SignUp(props) {

  const [login, { error2, data2 }] = useMutation(LOGIN);
  const [formState, setFormState] = useState({ 
      name: '', 
      interests: '', 
      password: '',
      phone: '',
      address: '',
      interests: '',
      about_me: '',
    });

  const [addFriend, { error }] = useMutation(ADD_FRIEND);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await addFriend({
        variables: { 
            name: formState.name, 
            email: formState.email, 
            password: formState.password,
            phone: formState.phone,
            address: formState.address,
            interests: formState.interests,
            about_me: formState.about_me
        },
      });
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
    const token = mutationResponse.data.login.token;
    Auth.login(token);
    props.authenticate(true); // do we need this? 
    } catch (e) {
      console.log(e);
    }
    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  
  return (
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="block lg:hidden h-8 w-auto" src={ffLogo} alt="ff_logo"></img>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create Your Account!</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Full Name"
                  onChange={handleChange}
                />
              </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="address" className="sr-only">
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="address"
                  autoComplete="address"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Address"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="phone"
                  autoComplete="phone"
                  pattern="\d{3}-\d{3}-\d{4}"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Phone number (format: 111-111-1111)"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="about_me" className="sr-only">
                  About Me
                </label>
                <input
                  id="about-me"
                  name="about_me"
                  type="about_me"
                  autoComplete="about_me"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="About Me"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="interests" className="sr-only">
                  Interests
                </label>
                <input
                  id="interests"
                  name="interests"
                  type="interests"
                  autoComplete="interests"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="interests"
                  onChange={handleChange}
                />
              </div>
            </div>

            

              <div className="text-sm">
                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Already have an account? Log In!
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default SignUp;