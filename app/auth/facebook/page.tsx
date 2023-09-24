'use client'; // Define that this is a client-side module.

// Import
import { SUCCESS_CODE } from '@/data/constant';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// Define a functional component called AuthFacebook.
const AuthFacebook = () => {
  const router = useRouter(); // Initialize the Next.js router.
  const [isSuccess, setIsSuccess] = useState(false); // Initialize a state variable for success.
  const [loading, setLoading] = useState(false); // Initialize a state variable for loading.

  // Function to send the Facebook code to the backend.
  async function sendCodeToBackend(code: string | null) {
    try {
      setLoading(true); // Set loading state to true.
      if (!code) return false; // If code is not available, return false.

      // Send a GET request to the Facebook callback API.
      const response = await fetch(`/fapi/fb_callback_api?code=${code}`, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*', // Include CORS header.
        }
      });

      if (!response.ok) {
        return false; // If the response is not okay, return false.
      }

      const data: IResponse = await response.json(); // Parse the response data.

      return data.status === SUCCESS_CODE; // Check if the response status matches the success code.
    } catch (error) {
      return false; // In case of an error, return false.
    } finally {
      setLoading(false); // Set loading state to false when the request is completed.
    }
  }

  useEffect(() => {
    loginWithFacebook(); // Call the loginWithFacebook function on component mount.
  }, []);

  // Function to handle Facebook login.
  async function loginWithFacebook() {
    const code = new URLSearchParams(window.location.search).get('code'); // Get the code from the URL.
    const flag = await sendCodeToBackend(code); // Send the code to the backend and get a flag.
    setIsSuccess(flag); // Set the isSuccess state based on the flag.

    // Redirect to '/socialInsights' after a delay of 1 second.
    setTimeout(() => {
      router.push('/socialInsights');
    }, 1000);
  }

  // Render content based on loading and success states.
  return (
    <div>
      {loading
        ? 'Loading...'
        : isSuccess
          ? 'Facebook Auth success'
          : 'Facebook Auth failed'
      }
    </div>
  );
}

export default AuthFacebook; // Export the AuthFacebook component.