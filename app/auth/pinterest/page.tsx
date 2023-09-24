// Import necessary modules and constants.
'use client';
import { SUCCESS_CODE } from '@/data/constant';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// Define the AuthPinterest component.
const AuthPinterest = () => {
  // Initialize the Next.js router.
  const router = useRouter();
  // Define state variables for success and loading states.
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Function to send the Pinterest authentication code to the backend.
  async function sendCodeToBackend(code: string | null) {
    try {
      setLoading(true);
      // Check if the code is available.
      if (!code) return false;
      // Send a GET request to the Pinterest authentication endpoint.
      const response = await fetch(`/fapi/pinterest_callback?code=${code}`, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });
      // Check if the response is not okay (e.g., error response).
      if (!response.ok) {
        return false;
      }
      // Parse the response data as JSON.
      const data: IResponse = await response.json();
      // Check if the authentication was successful based on the response status.
      return data.status === SUCCESS_CODE;
    } catch (error) {
      return false;
    } finally {
      setLoading(false);
    }
  }

  // Use useEffect to trigger the Pinterest login when the component mounts.
  useEffect(() => {
    loginWithPinterest();
  }, []);

  // Function to handle Pinterest login.
  async function loginWithPinterest() {
    // Get the Pinterest authentication code from the URL parameters.
    const code = new URLSearchParams(window.location.search).get('code');
    // Send the code to the backend for verification.
    const flag = await sendCodeToBackend(code);
    // Set the success state based on the verification result.
    setIsSuccess(flag);
    // Redirect to the social insights page after a delay.
    setTimeout(() => {
      router.push('/socialInsights');
    }, 1000);
  }

  // Render the component with loading and success messages.
  return (
    <div>
      {loading
        ? 'Loading...'
        : isSuccess
          ? 'Pinterest Auth success'
          : 'Pinterest Auth failed'
      }
    </div>
  );
}

export default AuthPinterest;