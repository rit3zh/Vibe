const fs = require("fs");
const props = {
  clientId: "d8a5ed958d274c2e8ee717e6a4b0971d",
  accessToken:
    "BQDDHkK2SNwMJREzUkY20iaKiPZFLZnRYIWfAQoWc_GNBxECPiLCTXyhuysKQkzY2wgpFggecw6495tdDslNJ1_rAEQj0aVBztBiQnF0gjEqD9KKpJmGi_4J08gdYS-utkKnBS-QbA83t4L3ire9T0NZDuT5YhtqRjeecRIxawC5TSCoox0lzpQ23JZKKHrAv6P-yUNpLHvXIdGXV6KHoASYd1oyF37pv8K1cC14WWLLn3iFH6ET-ttdmjLnFBby4UUpHKwxFYtEhI3sGjDOT7n-RhUiSW3VbJdDLWnW2A2vIKys87Qqs_4rtltNdt3ighsKZzET810JskznK0ctzyhF_TTI",
  accessTokenExpirationTimestampMs: 1716520553020,
  isAnonymous: false,
};

fetch(`https://api.spotify.com/v1/albums/4m2880jivSbbyEGAKfITCa`, {
  headers: {
    Authorization: `Bearer ${props.accessToken}`,
  },
}).then(async (response) => {
  const array = [];
  const data = await response.json();

  console.log(data);
});
