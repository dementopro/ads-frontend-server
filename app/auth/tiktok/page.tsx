// Import necessary modules and constants.
'use client';
import { SUCCESS_CODE } from '@/data/constant';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// Define the AuthTikTok component.
const AuthTikTok = () => {
  // Initialize the Next.js router.
  const router = useRouter();
  // Define state variables for success and loading states.
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Function to send the TikTok authentication codes to the backend for verification.
  async function sendCodeToBackend(auth_code: string | null, code: string | null) {
    try {
      setLoading(true);
      // Check if both the auth_code and code are available.
      if (!code || !auth_code) return false;
      // Send a GET request to the TikTok authentication endpoint with auth_code and code as parameters.
      const response = await fetch(`/fapi/tiktok_callback?auth_code=${auth_code}&code=${code}`, {
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

  // Use useEffect to trigger the TikTok login when the component mounts.
  useEffect(() => {
    loginWithTikTok();
  }, []);

  // Function to handle TikTok login.
  async function loginWithTikTok() {
    // Get the TikTok authentication codes (auth_code and code) from the URL parameters.
    const auth_code = new URLSearchParams(window.location.search).get('auth_code');
    const code = new URLSearchParams(window.location.search).get('code');
    // Send the codes to the backend for verification.
    const flag = await sendCodeToBackend(auth_code, code);
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
          ? 'TikTok Auth success'
          : 'TikTok Auth failed'
      }
    </div>
  );
}

export default AuthTikTok;