/* ========================
Simple Weather App JS Code starts here.
======================== */


/* All the global constants and variables used in the app starts here */

// setInterval container variables
let blinker;
let allTimeNDateUpdater;
let liveBackgrGrad;
// setInterval container variables

// today and tomorrow date and sunrise and sunset time variables (made global for seamless working of liveGradient)
let startDateString;
let endDateString;
let sunrise;
let sunset;
// today and tomorrow date and sunrise and sunset time variables (made global for seamless working of liveGradient)

// User Data Object
let userDataObj = JSON.parse(localStorage.getItem("weather_app_userDataObj"));
// User Data Object

// App backgound
const mapContainerdiv = document.getElementById("background");
// App backgound

// Layout variables
const header = document.getElementsByTagName("header");
const main = document.getElementsByTagName("main");
const highlighter = document.getElementById("tabHl");
const tabs = document.getElementsByClassName("tab");
// Layout variables

// Get Current City dialog box variables
const floatingBox = document.getElementsByClassName("floatingBox");
const cancelBtn = document.getElementsByClassName("cancelBtn");
const notificationBox = document.getElementsByClassName("notification");
const notificationMessage = document.getElementsByClassName("notificationMessage");
const inputBox = document.getElementsByClassName("inputBox");
const getCityBtn = document.getElementById("fetchCity");
const getLocationBtn = document.getElementById("fetchLocation");
// Get Current City dialog box variables

//  Individual tabs UI elements variables
const tabPages = document.getElementsByClassName("tabPage");
const tabTitle = document.getElementsByClassName("tabTitle");
const locationBtn = document.getElementsByClassName("locationBtn");
const refreshBtn = document.getElementsByClassName("refreshBtn");
const tabContent = document.getElementsByClassName("tabContent");
const loadingPage = document.getElementsByClassName("loadingPage");
//  Individual tabs UI elements variables

// Time and Date variables of Today page
const todayHour = document.getElementsByClassName("hour");
const todayMinute = document.getElementsByClassName("minute");
const todaySecond = document.getElementsByClassName("second");
const timeBlinker = document.getElementsByClassName("colon");
const todayDay = document.getElementsByClassName("day");
const todayDate = document.getElementsByClassName("date");
const todayMonth = document.getElementsByClassName("month");
const todayYear = document.getElementsByClassName("year");
// Time and Date variables of Today page

// Current Weather Card variables
const crtTempValue = document.getElementsByClassName("crtTempValue");
const maxTempValue = document.getElementsByClassName("maxTempValue");
const crtFlTempValue = document.getElementsByClassName("crtFlTempValue");
const minTempValue = document.getElementsByClassName("minTempValue");
const crtWeatherIcon = document.getElementsByClassName("crtWeatherIcon");
const crtWeatherIconDesc = document.getElementsByClassName("crtWeatherIconDesc");
const crtWeatherWindIcon = document.getElementsByClassName("crtWeatherWindIcon");
const crtWeatherWindSpeed = document.getElementsByClassName("crtWeatherWindSpeed");
const crtWeatherWindDirection = document.getElementsByClassName("crtWeatherWindDirection");
const crtPrecpValue = document.getElementsByClassName("crtPrecpValue");
const crtHmdtValue = document.getElementsByClassName("crtHmdtValue");
const crtDewPValue = document.getElementsByClassName("crtDewPValue");
const crtPresrValue = document.getElementsByClassName("crtPresrValue");
const crtAQIValue = document.getElementsByClassName("crtAQIValue");
const crtUVValue = document.getElementsByClassName("crtUVValue");
const crtVisibValue = document.getElementsByClassName("crtVisibValue");
const crtCldCvrValue = document.getElementsByClassName("crtCldCvrValue");
// Current Weather Card variables

// Today Hourly Weather Card variables
const tableEl = document.getElementsByClassName("hourlyWeather");
const hourlyTemperatureValue = document.getElementsByClassName("hourlyTemperatureValue");
const hourlyTemperaturePoints = document.getElementsByClassName("hourlyTemperaturePoints");
const hourlyWeatherTime = document.getElementsByClassName("hourlyWeatherTime");
const hourlyWeatherIcon = document.getElementsByClassName("hourlyWeatherIcon");
const hourlyWeatherDescription = document.getElementsByClassName("hourlyWeatherDescription");
const hourlyWeatherWindIcon = document.getElementsByClassName("hourlyWeatherWindIcon");
const hourlyWeatherWindDesc = document.getElementsByClassName("hourlyWeatherWindDesc");
const hourlyWeatherFlTemp = document.getElementsByClassName("hourlyWeatherFlTemp");
const hourlyWeatherCloudCover = document.getElementsByClassName("hourlyWeatherCloudCover");
const hourlyWeatherPrecipPercen = document.getElementsByClassName("hourlyWeatherPrecipPercen");
const hourlyWeatherPrecipVolume = document.getElementsByClassName("hourlyWeatherPrecipVolume");
// Today Hourly Weather Card variables

// Today Day and Night Timing Details Card variables
const progressBar_H = document.getElementsByClassName("progressBarContainer-H");
const progressBar_C = document.getElementsByClassName("progressBarContainer-C");
const todayProgressPercent = document.getElementsByClassName("progressPercentValue");
const todayProgressIndicator = document.getElementsByClassName("progressIndicator");
const todayProgressIndicatorCir = document.getElementsByClassName("progressIndicatorCirSvgBar");
const todaySunriseValue = document.getElementsByClassName("todaySunriseValue");
const todaySunsetValue = document.getElementsByClassName("todaySunsetValue");
const todayTotalDayHours = document.getElementsByClassName("todayTotalDayHours");
const todayTotalDayMins = document.getElementsByClassName("todayTotalDayMins");
const todayRemainDayHours = document.getElementsByClassName("todayRemainDayHours");
const todayRemainDayMins = document.getElementsByClassName("todayRemainDayMins");
const todayTotalNightHours = document.getElementsByClassName("todayTotalNightHours");
const todayTotalNightMins = document.getElementsByClassName("todayTotalNightMins");
const todayRemainNightHours = document.getElementsByClassName("todayRemainNightHours");
const todayRemainNightMins = document.getElementsByClassName("todayRemainNightMins");
// Today Day and Night Timing Details Card variables

// Tomorrow Average Weather Card variables
const tmwDay = document.getElementsByClassName("tmwDay");
const tmwDate = document.getElementsByClassName("tmwDate");
const tmwMonth = document.getElementsByClassName("tmwMonth");
const tmwYear = document.getElementsByClassName("tmwYear");
const tmwMaxTempValue = document.getElementsByClassName("tmwMaxTempValue");
const tmwMinTempValue = document.getElementsByClassName("tmwMinTempValue");
const tmwWeatherIcon = document.getElementsByClassName("tmwWeatherIcon");
const tmwWeatherIconDesc = document.getElementsByClassName("tmwWeatherIconDesc");
const tmwWeatherWindIcon = document.getElementsByClassName("tmwWeatherWindIcon");
const tmwWeatherWindSpeed = document.getElementsByClassName("tmwWeatherWindSpeed");
const tmwWeatherWindDirection = document.getElementsByClassName("tmwWeatherWindDirection");
const tmwPrecpValue = document.getElementsByClassName("tmwPrecpValue");
const tmwHmdtValue = document.getElementsByClassName("tmwHmdtValue");
const tmwPresrValue = document.getElementsByClassName("tmwPresrValue");
const tmwUVValue = document.getElementsByClassName("tmwUVValue");
const tmwVisibValue = document.getElementsByClassName("tmwVisibValue");
const tmwCldCvrValue = document.getElementsByClassName("tmwCldCvrValue");
// Tomorrow Average Weather Card variables

// Tomorrow Hourly Weather Card variables
const tmwHourlyTemperatureValue = document.getElementsByClassName("tmwHourlyTemperatureValue");
const tmwHourlyTemperaturePoints = document.getElementsByClassName("tmwHourlyTemperaturePoints");
const tmwHourlyWeatherIcon = document.getElementsByClassName("tmwHourlyWeatherIcon");
const tmwHourlyWeatherDescription = document.getElementsByClassName("tmwHourlyWeatherDescription");
const tmwHourlyWeatherWindIcon = document.getElementsByClassName("tmwHourlyWeatherWindIcon");
const tmwHourlyWeatherWindDesc = document.getElementsByClassName("tmwHourlyWeatherWindDesc");
const tmwHourlyWeatherFlTemp = document.getElementsByClassName("tmwHourlyWeatherFlTemp");
const tmwHourlyWeatherCloudCover = document.getElementsByClassName("tmwHourlyWeatherCloudCover");
const tmwHourlyWeatherPrecipPercen = document.getElementsByClassName("tmwHourlyWeatherPrecipPercen");
const tmwHourlyWeatherPrecipVolume = document.getElementsByClassName("tmwHourlyWeatherPrecipVolume");
// Tomorrow Hourly Weather Card variables

// Tomorrow Day and Night Timing Details Card variables
const tmwSunriseValue = document.getElementsByClassName("tmwSunriseValue");
const tmwSunsetValue = document.getElementsByClassName("tmwSunsetValue");
const tmwDayHours = document.getElementsByClassName("tmwDayHours");
const tmwDayMins = document.getElementsByClassName("tmwDayMins");
const tmwNightHours = document.getElementsByClassName("tmwNightHours");
const tmwNightMins = document.getElementsByClassName("tmwNightMins");
// Tomorrow Day and Night Timing Details Card variables

// Forcast Card Layout variables
const forecastHead = document.getElementsByClassName("f-basicDetails");
const forecastCollapse = document.getElementsByClassName("f-collapse");
// Forcast Card Layout variables

// Forecast Head Date and Weather Details Card variables
const fDay = document.getElementsByClassName("fDay");
const fDate = document.getElementsByClassName("fDate");
const fMonth = document.getElementsByClassName("fMonth");
const fWeatherDesc = document.getElementsByClassName("fWeatherDesc");
const fWeatherIcon = document.getElementsByClassName("fWeatherIcon");
const fMaxTemp = document.getElementsByClassName("fMaxTemp");
const fMinTemp = document.getElementsByClassName("fMinTemp");
// Forecast Head Date and Weather Details Card variables

// Forecast Collapse Additional Weather Details variables
const fWindSpeedNDirec = document.getElementsByClassName("fWindSpeedNDirec");
const fPrecipVolNPerc = document.getElementsByClassName("fPrecipVolNPerc");
const fCldCvr = document.getElementsByClassName("fCldCvr");
const fSunrise = document.getElementsByClassName("fSunrise");
const fSunset = document.getElementsByClassName("fSunset");
// Forecast Collapse Additional Weather Details variables

// Forecast Collapse Hourly Weather Details variables
const fHourlyTemp = document.getElementsByClassName("fHourlyTemp");
const fHourlyWeatherIcon = document.getElementsByClassName("fHourlyWeatherIcon");
// Forecast Collapse Hourly Weather Details variables

// Settings Card Head variables 
const settingHead = document.getElementsByClassName("s-optionDetail");
const settingCollapseToggleIcon = document.getElementsByClassName("s-collapseToggleIcon");
// Settings Card Head variables

// Settings Card Options variables 
const settingCollapse = document.getElementsByClassName("s-collapse");
const settingOption = document.getElementsByClassName("s-option");
// Settings Card Options variables 

/* All the global constants and variables used in the app ends here */

/* Bottom navigation - tab switching functionality starts here */

for (let c = 0; c < tabs.length; c++) {
  tabs[c].addEventListener("click", (event) => {
    for (let c1 = 0; c1 < tabs.length; c1++) {
      tabPages[c1].classList.remove("active");
      tabs[c1].style.color = "black";
    }
    switch (c) {
      case 0:
        if (floatingBox[0].classList.contains("active")) {
          closeLocationDialogBox();
        }
        header[0].style.background = `rgba(140, 255, 102, 0.2)`;
        main[0].style.background = `rgba(140, 255, 102, 0.2)`;
        highlighter.style.background = `rgba(120, 255, 72, 0.9)`;
        tabs[c].style.color = `rgba(120, 255, 72, 0.9)`;
        tabPages[c].classList.add("active");
        highlight(event.target);
        break;
      case 1:
        if (floatingBox[0].classList.contains("active")) {
          closeLocationDialogBox();
        }
        header[0].style.background = `rgba(255, 255, 102, 0.2)`;
        main[0].style.background = `rgba(255, 255, 102, 0.2)`;
        highlighter.style.background = `rgb(160, 160, 0)`;
        tabs[c].style.color = `rgb(160, 160, 0)`;
        tabPages[c].classList.add("active");
        highlight(event.target);
        break;
      case 2:
        if (floatingBox[0].classList.contains("active")) {
          closeLocationDialogBox();
        }
        header[0].style.background = `rgba(255, 190, 190, 0.2)`;
        main[0].style.background = `rgba(255, 190, 190, 0.2)`;
        highlighter.style.background = `rgb(217, 50, 50)`;
        tabs[c].style.color = `rgb(217, 50, 50)`;
        tabPages[c].classList.add("active");
        highlight(event.target);
        break;
      case 3:
        if (floatingBox[0].classList.contains("active")) {
          closeLocationDialogBox();
        }
        header[0].style.background = `rgba(255, 102, 255, 0.2)`;
        main[0].style.background = `rgba(255, 102, 255, 0.2)`;
        highlighter.style.background = `rgb(255, 0, 255)`;
        tabs[c].style.color = `rgb(255, 0, 255)`;
        tabPages[c].classList.add("active");
        highlight(event.target);
        break;

      default:
        console.log("Check Line 249 for any error, if any.");
        break;
    }
    setTimeout(() => {
      // refreshBtn[c].children[0].style.stroke = "black";
      tabs[c].style.color = "black";
    }, 500);
  });
};

/* Tab Highlighter function - renders a highlighter on the active tab - The functionality starts here */
function highlight(e) {
  highlighter.style.left = e.offsetLeft + "px";
  highlighter.style.width = e.offsetWidth + "px";
}
/* Tab Highlighter function - renders a highlighter on the active tab - The functionality ends here */

/* Setting Default Page */
document.getElementById("todayTab").click();
// document.getElementById("tomorrowTab").click();
// document.getElementById("forecastTab").click();
// document.getElementById("settingsTab").click();

/* Bottom navigation - tab switching functionality ends here */

/* Get Current City dialog box functionality - opens the dialog box - The functionality starts here */
for (let c = 0; c < locationBtn.length; c++) {
  locationBtn[c].addEventListener("click", () => {
    locationBtn[c].children[0].style.fill = `rgb(105, 224, 245, 0.9)`;
    switch (c) {
      case 0:
        floatingBox[0].classList.add("active");
        tabContent[0].classList.add("dim");
        for (let c = 0; c < loadingPage.length; c++) {
          loadingPage[c].style.display = "none";
        }
        break;
      case 1:
        floatingBox[0].classList.add("active");
        tabContent[1].classList.add("dim");
        for (let c = 0; c < loadingPage.length; c++) {
          loadingPage[c].style.display = "none";
        }
        break;
      case 2:
        floatingBox[0].classList.add("active");
        tabContent[2].classList.add("dim");
        for (let c = 0; c < loadingPage.length; c++) {
          loadingPage[c].style.display = "none";
        }
        break;

      default:
        console.log("Check Line 259 for any error, if any.");
        break;
    }
  })
}
/* Get Current City dialog box functionality - opens the dialog box - The functionality ends here */

/* Refresh functionality - refreshes tabs with freshly called  API data - The functionality starts here */
for (let c = 0; c < refreshBtn.length; c++) {
  refreshBtn[c].addEventListener("click", async() => {
    refreshBtn[c].children[0].style.stroke = `rgb(105, 224, 245, 0.9)`;
    switch (c) {
      case 0:
        console.log("Today Tab Refreshed");
        loadingPage[c].style.display = "flex";
        clearInterval(blinker);
        blinker = null;
        clearInterval(allTimeNDateUpdater);
        allTimeNDateUpdater = null;
        if (userDataObj === null || Object.keys(userDataObj).length === 0 || userDataObj === undefined || userDataObj.location === undefined) {
          await checkUserGeoData(await getUserGeoData());
        } else {
          await renderTodayTabData(
            await getUserLocationAndWeatherData(userDataObj.location),
            userDataObj.progressBarChoice,
            userDataObj.backgroundChoice
          );
        }
        tabs[c].click();
        break;
      case 1:
        console.log("Tomorrow Tab Refreshed");
        loadingPage[c].style.display = "flex";
        if (userDataObj === null || Object.keys(userDataObj).length === 0 || userDataObj === undefined || userDataObj.location === undefined) {
          await checkUserGeoData(await getUserGeoData());
        } else {
          await renderTomorrowTabData(
            await getUserLocationAndWeatherData(userDataObj.location)
          );
        }
        tabs[c].click();
        break;
      case 2:
        console.log("Forecast Tab Refreshed");
        loadingPage[c].style.display = "flex";
        if (userDataObj === null || Object.keys(userDataObj).length === 0 || userDataObj === undefined || userDataObj.location === undefined) {
          await checkUserGeoData(await getUserGeoData());
        } else {
          await renderForecastTabData(
            (await getUserLocationAndWeatherData(userDataObj.location)).location.lat,
            (await getUserLocationAndWeatherData(userDataObj.location)).location.lon
          );
        }
        tabs[c].click();
        break;
      case 3:
        console.log("All Tabs Refreshed");
        location.reload();
        tabs[0].click();
        break;

      default:
        console.log("Check Line 319 for any error, if any.");
        break;
    }
    setTimeout(() => {
      refreshBtn[c].children[0].style.stroke = "black";
    }, 1000);
  })
}
/* Refresh functionality - refreshes tabs with freshly called  API data - The functionality ends here */

/* Close Location Dialog Box Button function - closes the Get Current City dialog box - The functionality starts here */
cancelBtn[0].addEventListener("click", closeLocationDialogBox);

function closeLocationDialogBox() {
  cancelBtn[0].children[0].style.fill = "red";
  if (userDataObj === null || Object.keys(userDataObj).length === 0 || userDataObj === undefined || userDataObj.location === undefined) {
    document.getElementById("bothBar").click();
    notificationBox[1].style.border = `1px solid rgb(241 174 181)`;
    notificationBox[1].style.backgroundColor = `rgba(248, 215, 218, 0.5)`;
    notificationBox[1].style.color = `rgb(88 21 28)`;
    notificationMessage[1].innerHTML = `
    Please use 
    
    <button class="locationBtn" title="Location" type="button" style="border:none;">
    <svg width="12pt" height="12pt" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000">
      <path fill-rule="evenodd"
        d="M14.78 1.22a.75.75 0 01.148.851l-5.921 12.5a.75.75 0 01-1.406-.14L6.395 9.606 1.568 8.4a.75.75 0 01-.14-1.406l12.5-5.92a.75.75 0 01.852.147zM3.965 7.452l3.23.807a.75.75 0 01.546.546l.807 3.23 4.125-8.708-8.708 4.125z"
        clip-rule="evenodd" />
    </svg>
    </button>

    button to get weather details of your desired location.`;
    notificationBox[1].classList.add("active");
    setTimeout(() => {
      if (userDataObj === null || Object.keys(userDataObj).length === 0 || userDataObj === undefined || userDataObj.location === undefined) {
      locationBtn[0].click();
      getLocationBtn.focus();
      } else {
        notificationBox[1].classList.remove("active");
      }
    }, 10000);
  } else {
    notificationBox[1].classList.remove("active");
  }
  setTimeout(() => {
    floatingBox[0].classList.remove("active");
    cancelBtn[0].children[0].style.fill = "black";
    locationBtn[0].children[0].style.fill = "black";
    locationBtn[1].children[0].style.fill = "black";
    locationBtn[2].children[0].style.fill = "black";
    tabContent[0].classList.remove("dim");
    tabContent[1].classList.remove("dim");
    tabContent[2].classList.remove("dim");
  }, 100);
}
/* Close Location Dialog Box Button function - closes the Get Current City dialog box - The functionality ends here */

/* Get City functionality - takes input from user about the desired city and  use that input to call the API that provides location and weather details for the respective city - This function is used in case Get Geo API fails to fetch user location or if the user wants to get weather details of any other city - The functionality starts here */
getCityBtn.addEventListener("click", async () => {
  for (let c = 0; c < loadingPage.length; c++) {
    loadingPage[c].style.display = "flex";
  }
  closeLocationDialogBox();
  await checkUserInputLocationData(
    await getUserLocationAndWeatherData(
      await getCity()
    )
  );
});

async function getCity() {
  return new Promise ((resolve) => {
      if (inputBox[0].value.length < 3) {
        notificationBox[0].style.border = `1px solid rgb(241 174 181)`;
        notificationBox[0].style.backgroundColor = `rgba(248, 215, 218, 0.5)`;
        notificationBox[0].style.color = `rgb(88 21 28)`;
        notificationMessage[0].textContent = `Please enter a valid City or Coordinates.`;
        notificationBox[0].classList.add("active");
        setTimeout(() => {
          notificationBox[0].classList.remove("active");
        }, 15000);
        setTimeout(() => {
          locationBtn[0].click();
          getLocationBtn.focus();
        }, 200);
      } else {
        resolve(inputBox[0].value);
        inputBox[0].value = ``;
      }
  });
}
/* Get City functionality - takes input from user about the desired city and  use that input to call the API that provides location and weather details for the respective city - This function is used in case Get Geo API fails to fetch user location or if the user wants to get weather details of any other city - The functionality ends here */

/* Get Location functionality - takes input from user about the current location coordinates - longitude and latitude - and use that coordinates to call the API that provides location and weather details for the respective location - This function is used in case Get Geo API fails to fetch user location or if the user wants to get weather details of any other city - The functionality starts here */
getLocationBtn.addEventListener("click", async () => {
  for (let c = 0; c < loadingPage.length; c++) {
    loadingPage[c].style.display = "flex";
  }
  closeLocationDialogBox();
  await checkUserInputLocationData(
    await getUserLocationAndWeatherData(
      await getLocation()
    )
  );
});

async function getLocation() {
  if (navigator.geolocation) {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
    } catch (error) {
      // console.log(error)
      switch (error.code) {
        case 1:
          // alert("Location permission not allowed!");
          notificationBox[0].style.border = `1px solid rgb(241 174 181)`;
          notificationBox[0].style.backgroundColor = `rgba(248, 215, 218, 0.5)`;
          notificationBox[0].style.color = `rgb(88 21 28)`;
          notificationMessage[0].textContent = `Location permission not allowed! Please enter a valid City or Coordinates.`;
          notificationBox[0].classList.add("active");
          setTimeout(() => {
            notificationBox[0].classList.remove("active");
          }, 15000);
          locationBtn[0].click();
          getLocationBtn.focus();
          break;
        case 2:
          notificationBox[0].style.border = `1px solid rgb(241 174 181)`;
          notificationBox[0].style.backgroundColor = `rgba(248, 215, 218, 0.5)`;
          notificationBox[0].style.color = `rgb(88 21 28)`;
          notificationMessage[0].textContent = `Location information is unavailable! Please enter a valid City or Coordinates.`;
          notificationBox[0].classList.add("active");
          setTimeout(() => {
            notificationBox[0].classList.remove("active");
          }, 15000);
          locationBtn[0].click();
          getLocationBtn.focus();
          break;
        case 3:
          notificationBox[0].style.border = `1px solid rgb(241 174 181)`;
          notificationBox[0].style.backgroundColor = `rgba(248, 215, 218, 0.5)`;
          notificationBox[0].style.color = `rgb(88 21 28)`;
          notificationMessage[0].textContent = `The request to get user location timed out! Please enter a valid City or Coordinates.`;
          notificationBox[0].classList.add("active");
          setTimeout(() => {
            notificationBox[0].classList.remove("active");
          }, 15000);
          locationBtn[0].click();
          getLocationBtn.focus();
          break;
      
        default:
          alert("An unknown error occured!")
          break;
      }
      return error;
    }
  } else {
    alert("Geolocation is not supported by your browser. Try searching for city name.");
    // return new Error("Geolocation is not supported by your browser.");
  }
}
/* Get Location functionality - takes input from user about the current location coordinates - longitude and latitude - and use that coordinates to call the API that provides location and weather details for the respective location - This function is used in case Get Geo API fails to fetch user location or if the user wants to get weather details of any other city - The functionality ends here */

/* Forecast Weather Card toggle functionality - opens/closes the forecast weather card - The functionality starts here */
for (let c = 0; c < forecastHead.length; c++) {
  forecastHead[c].addEventListener("click", (event) => {
    forecastCollapse[c].classList.toggle("active");
  });
}
/* Forecast Weather Card toggle functionality - opens/closes the forecast weather card - The functionality ends here */

/* Setting Option Card toggle icon rotater functionality - rotates the icon to point down when expanded and right when collapsed - The functionality starts here */
for (let c = 0; c < settingHead.length; c++) {
  settingHead[c].addEventListener("click", (event) => {
    settingCollapse[c].classList.toggle("active");
    settingCollapseToggleIcon[c].classList.toggle("s-cTI-toggle");
  });
}
/* Setting Option Card toggle icon rotater functionality - rotates the icon to point down when expanded and right when collapsed - The functionality ends here */

/* Setting Options functional logics - define what happens when user interact with different setting options of the application - The functionality starts here */
for (let c = 0; c < settingOption.length; c++) {
  settingOption[c].addEventListener("click", (event) => {
    switch (c) {
      case 0:
        settingCollapse[0].classList.remove("active");
        settingCollapseToggleIcon[0].classList.remove("s-cTI-toggle");
        settingOption[c].style.background = "rgba(255, 102, 255, 0.5)";
        settingOption[1].style.background = "transparent";
        clearInterval(liveBackgrGrad);
        liveBackgrGrad = null;
        backgroundMapFetchAndRender(
          irrelevantCharacterRemover(`${userDataObj.address.city}`), 
          irrelevantCharacterRemover(`${userDataObj.address.state}`),
          irrelevantCharacterRemover(`${userDataObj.address.country}`)
        );
        mapContainerdiv.style.background = `#FFFFFF`;
        userDataObj.backgroundChoice = `${event.target.id}`;
        localStorage.setItem("weather_app_userDataObj", JSON.stringify(userDataObj));
        break;
      case 1:
        settingCollapse[0].classList.remove("active");
        settingCollapseToggleIcon[0].classList.remove("s-cTI-toggle");
        settingOption[c].style.background = "rgba(255, 102, 255, 0.5)";
        settingOption[0].style.background = "transparent";
        mapContainerdiv.innerHTML = ``;
        if (!liveBackgrGrad) {
          liveBackgrGrad = setInterval(() => {
            backgroundGradientChanger(startDateString, sunrise, sunset)
          }, 1000);
        }
        userDataObj.backgroundChoice = `${event.target.id}`;
        localStorage.setItem("weather_app_userDataObj", JSON.stringify(userDataObj));
        break;

      case 2:
        settingCollapse[1].classList.remove("active");
        settingCollapseToggleIcon[1].classList.remove("s-cTI-toggle");
        settingOption[c].style.background = "rgba(255, 102, 255, 0.5)";
        settingOption[3].style.background = "transparent";
        settingOption[4].style.background = "transparent";
        progressBar_H[0].style.display = "flex";
        progressBar_C[0].style.display = "none";
        userDataObj.progressBarChoice = `${event.target.id}`;
        localStorage.setItem("weather_app_userDataObj", JSON.stringify(userDataObj));    
        break;
      case 3:
        settingCollapse[1].classList.remove("active");
        settingCollapseToggleIcon[1].classList.remove("s-cTI-toggle");
        settingOption[c].style.background = "rgba(255, 102, 255, 0.5)";
        settingOption[2].style.background = "transparent";
        settingOption[4].style.background = "transparent";
        progressBar_H[0].style.display = "none";
        progressBar_C[0].style.display = "flex";
        userDataObj.progressBarChoice = `${event.target.id}`;
        localStorage.setItem("weather_app_userDataObj", JSON.stringify(userDataObj));
        break;
      case 4:
        settingCollapse[1].classList.remove("active");
        settingCollapseToggleIcon[1].classList.remove("s-cTI-toggle");
        settingOption[c].style.background = "rgba(255, 102, 255, 0.5)";
        settingOption[2].style.background = "transparent";
        settingOption[3].style.background = "transparent";
        progressBar_H[0].style.display = "flex";
        progressBar_C[0].style.display = "flex";
        userDataObj.progressBarChoice = `${event.target.id}`;
        localStorage.setItem("weather_app_userDataObj", JSON.stringify(userDataObj));
        break;

      case 5:
        settingCollapse[2].classList.remove("active");
        settingCollapseToggleIcon[2].classList.remove("s-cTI-toggle");
        settingOption[c].style.background = "rgba(255, 102, 255, 0.5)";
        setTimeout(() => {
          settingOption[c].style.background = "rgba(255, 2, 2, 0.5)";
        }, 500);
        localStorage.removeItem("weather_app_userDataObj");
        break;

      default:
        break;
    }
  })
}
/* Setting Options functional logics - define what happens when user interact with different setting options of the application - The functionality ends here */

/* Realtime User online status check functionality - checks for whether the user device is online or not and instantly triggers the function to inform the user about the same - The functionality starts here */
window.addEventListener("online", checkUserOnlineStatus);
window.addEventListener("offline", checkUserOnlineStatus);
checkUserOnlineStatus();
/* Realtime User online status check functionality - checks for whether the user device is online or not and instantly triggers the function to inform the user about the same - The functionality ends here */

/* Script Execution functionality based on user online status - checks for user device internet connection and executes the respective script either to inform the user about offline status or if online, then starts the execution of default script to fetch and render weather data - The functionality starts here */
function checkUserOnlineStatus() {
  if (navigator.onLine) {
    notificationBox[0].classList.remove("active");
    notificationBox[1].classList.remove("active");
    for (let c = 0; c < loadingPage.length; c++) {
      loadingPage[c].style.display = "flex";
    }
    scriptStartFunction(userDataObj);
  } else {
    for (let c = 0; c < notificationBox.length; c++) {
      notificationBox[c].style.border = `1px solid rgb(241 174 181)`;
      notificationBox[c].style.backgroundColor = `rgba(248, 215, 218, 0.5)`;
      notificationBox[c].style.color = `rgb(88 21 28)`;
      notificationMessage[c].textContent = `
      Internet Disconnected.
      Please check your connection!
      `;
      notificationBox[c].classList.add("active");
    }
  }
}
/* Script Execution functionality based on user online status - checks for user device internet connection and executes the respective script either to inform the user about offline status or if online, then starts the execution of default script to fetch and render weather data - The functionality ends here */

/* Default app script to check local storage for saved user data - if found then uses it to fetch and render data accordingly - if not found then uses an api get user location data - The functionality starts here */
async function scriptStartFunction(userDataObject) {
  if (userDataObject === null || Object.keys(userDataObject).length === 0 || userDataObject === undefined || userDataObject.location === undefined) {
    await checkUserGeoData(await getUserGeoData());
  } else {
    await renderLocationAndWeatherData(
      await getUserLocationAndWeatherData(userDataObject.location), 
      userDataObject.progressBarChoice, 
      userDataObject.backgroundChoice
      );
  }
}
/* Default app script to check local storage for saved user data - if found then uses it to fetch and render data accordingly - if not found then uses an api get user location data - The functionality ends here */

/* Get User Location Data function - This function uses a third party api (Get Geo API) to get user location data based on their ip address (device or network ip) - The functionality starts here */
async function getUserGeoData() {
  try {
    const getGeoData = await fetch(`https://api.getgeoapi.com/v2/ip/check?api_key=931671e88b21597a36142408f6d074d43806a7cb&format=json`);
    const getGeoDataObj = await getGeoData.json();
    return getGeoDataObj;
  } catch (error) {
    console.log(error);
    return error;
  }
}
/* Get User Location Data function - This function uses a third party api (Get Geo API) to get user location data based on their ip address (device or network ip) - The functionality ends here */

/* Check Get Geo API Data fucntion - checks for API Response data for a successful response - if found success then uses the respective coordinates to call the Free Weather API for weather and location information of that coordinates - if found any error then informs the user about the same and asks the user to provide location or city details manually in order to proceed - The functionality starts here */
async function checkUserGeoData(getGeoAPIDataObj) {
  if (getGeoAPIDataObj.status === "success") {
    await renderLocationAndWeatherData(
      await getUserLocationAndWeatherData(
        getGeoAPIDataObj.location
      ),
      userDataObj.progressBarChoice,
      userDataObj.backgroundChoice
    );
  } else {
    notificationBox[0].style.border = `1px solid rgb(250, 204, 69)`;
    notificationBox[0].style.backgroundColor = `rgba(255, 243, 205, 0.5)`;
    notificationBox[0].style.color = `rgb(102, 77, 3)`;
    notificationMessage[0].textContent = `
    Auto Positioning System Not working.
    Please use this dialog box to get weather of your location.
    Sorry for Inconvenience!
    `;
    notificationBox[0].classList.add("active");
    setTimeout(() => {
      notificationBox[0].classList.remove("active");
    }, 10000);
    locationBtn[0].click();
    getLocationBtn.focus();
  }
}
/* Check Get Geo API Data fucntion - checks for API Response data for a successful response - if found success then uses the respective coordinates to call the Free Weather API for weather and location information of that coordinates - if found any error then informs the user about the same and asks the user to provide location or city details manually in order to proceed - The functionality ends here */

/* Get User Location and Weather Data function - This function uses a third party api (Free Weather API) to fetch user location and weather data for the coordinates or city name provided. This function also uses that Response data to call the function that creates and saves the User Data Object to local storage. - The functionality starts here */
async function getUserLocationAndWeatherData(cityOrCoordinates) {
  let userInput = ``;
  let getLocationAndWeatherData = ``;
  
  try {
    if (typeof cityOrCoordinates === "object") {
      userInput = `${cityOrCoordinates.latitude},${cityOrCoordinates.longitude}`;
      getLocationAndWeatherData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=6c1c4183d7bc4e8f89001946241201&q=${userInput}&days=7&aqi=yes&alerts=yes`);
    } else {
      userInput = `${cityOrCoordinates}`;
      getLocationAndWeatherData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=6c1c4183d7bc4e8f89001946241201&q=${userInput}&days=7&aqi=yes&alerts=yes`);
    }
    const getLocationAndWeatherDataObj = await getLocationAndWeatherData.json();
    if ("error" in getLocationAndWeatherDataObj) {
      return await getLocationAndWeatherDataObj;
    } else {
      if (userDataObj === null || Object.keys(userDataObj).length === 0 || userDataObj === undefined || userDataObj.location === undefined) {
        userDataCreator(getLocationAndWeatherDataObj.location, "bothBar", "liveGradient");
      } else if (userDataObj.latitude !== getLocationAndWeatherDataObj.location.lat || userDataObj.longitude !== getLocationAndWeatherDataObj.location.lon) {
        userDataCreator(getLocationAndWeatherDataObj.location, userDataObj.progressBarChoice, userDataObj.backgroundChoice);
      }
    return await getLocationAndWeatherDataObj;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}
/* Get User Location and Weather Data function - This function uses a third party api (Free Weather API) to fetch user location and weather data for the coordinates or city name provided. This function also uses that Response data to call the function that creates and saves the User Data Object to local storage. - The functionality ends here */

/* Check User Input function - checks the user input (city name or coordinates) by calling the Free Weather API with that input and if a valid response is received from the API then the data is used to render information - if found invalid then informs the user about the invalidity and asks the user for valid input - The functionality starts here */
async function checkUserInputLocationData(freeWeatherAPIDataObj) {
  if ("location" in freeWeatherAPIDataObj) {
    await renderLocationAndWeatherData(freeWeatherAPIDataObj, userDataObj.progressBarChoice, userDataObj.backgroundChoice);
  } else if ("error" in freeWeatherAPIDataObj) {
    if (!notificationBox[0].classList.contains("active")) {
      notificationBox[0].style.border = `1px solid rgb(241 174 181)`;
      notificationBox[0].style.backgroundColor = `rgba(248, 215, 218, 0.5)`;
      notificationBox[0].style.color = `rgb(88 21 28)`;
      notificationMessage[0].textContent = `
      Invalid Input.
      Please enter a valid City or Coordinates.
      `;
      notificationBox[0].classList.add("active");
      setTimeout(() => {
        notificationBox[0].classList.remove("active");
      }, 24000);
    }
    locationBtn[0].click();
    getLocationBtn.focus();
  }
}
/* Check User Input function - checks the user input (city name or coordinates) by calling the Free Weather API with that input and if a valid response is received from the API then the data is used to render information - if found invalid then informs the user about the invalidity and asks the user for valid input - The functionality ends here */

/* Render Data to Tab function - uses the response object of Free Weather API to call the functions that render data to today and tomorrow tab and uses the coordinates available in the response object to call the renderForecastTabData function to fetch and render the forecast weather data - The functionality starts here */
async function renderLocationAndWeatherData(todayNTomorrowWeatherDataObj, progBarChoice, backgroundChoice) {
  closeLocationDialogBox();
  await renderTodayTabData(await todayNTomorrowWeatherDataObj, progBarChoice, backgroundChoice);
  await renderTomorrowTabData(await todayNTomorrowWeatherDataObj);
  await renderForecastTabData(await todayNTomorrowWeatherDataObj.location.lat, await todayNTomorrowWeatherDataObj.location.lon);
}
/* Render Data to Tab function - uses the response object of Free Weather API to call the functions that render data to today and tomorrow tab and uses the coordinates available in the response object to call the renderForecastTabData function to fetch and render the forecast weather data - The functionality ends here */

/* Render Today Tab Data function - renders data on the "Today" tab as well as on the "Today" card in forecast tab - The functionality starts here */
async function renderTodayTabData(todayWeatherDataObject, progBarChoice, backgroundChoice) {
  // console.log(todayWeatherDataObject);
  // console.log(progBarChoice);
  // console.log(backgroundChoice);
  startDateString = todayWeatherDataObject.forecast.forecastday[0].date;
  endDateString = todayWeatherDataObject.forecast.forecastday[1].date;
  sunrise = todayWeatherDataObject.forecast.forecastday[0].astro.sunrise;
  sunset = todayWeatherDataObject.forecast.forecastday[0].astro.sunset;

  document.getElementById(`${backgroundChoice}`).click();
  for (let c = 0; c < tabTitle.length; c++) {
    tabTitle[c].innerHTML = `${todayWeatherDataObject.location.name}, ${todayWeatherDataObject.location.region}, ${userDataObj.address.country}`;
  }

  if (!blinker) {
    blinker = setInterval(() => {
      for (let c = 0; c < timeBlinker.length; c++) {
        timeBlinker[c].classList.toggle("blink");
      }
    }, 500);
  }
  if (!allTimeNDateUpdater) {
    allTimeNDateUpdater = setInterval(updateAllTimeAndDateEl, 1000);
  }

  crtTempValue[0].textContent = todayWeatherDataObject.current.temp_c;
  maxTempValue[0].textContent = todayWeatherDataObject.forecast.forecastday[0].day.maxtemp_c;
  crtFlTempValue[0].textContent = todayWeatherDataObject.current.feelslike_c;
  minTempValue[0].textContent = todayWeatherDataObject.forecast.forecastday[0].day.mintemp_c;
  crtWeatherIcon[0].src = `https:${todayWeatherDataObject.current.condition.icon}`;
  crtWeatherIcon[0].alt = todayWeatherDataObject.current.condition.text;
  crtWeatherIconDesc[0].textContent = todayWeatherDataObject.current.condition.text;
  crtWeatherWindIcon[0].style.transform = `rotate(${Number(todayWeatherDataObject.current.wind_degree - 180)}deg)`;
  crtWeatherWindSpeed[0].textContent = `${todayWeatherDataObject.current.wind_kph} Km/h,`;
  crtWeatherWindDirection[0].textContent = `${defineWindDirection(todayWeatherDataObject.current.wind_degree)[0]}`;
  crtPrecpValue[0].textContent = `${todayWeatherDataObject.current.precip_mm} mm`;
  crtHmdtValue[0].textContent = `${todayWeatherDataObject.current.humidity} %`;
  crtDewPValue[0].innerHTML = `${todayWeatherDataObject.forecast.forecastday[0].hour[new Date().getHours()].dewpoint_c} &deg;C`;
  crtPresrValue[0].textContent = `${todayWeatherDataObject.current.pressure_mb} mBar`;
  crtAQIValue[0].textContent = `${todayWeatherDataObject.current.air_quality.pm2_5}`;
  crtUVValue[0].textContent = `${todayWeatherDataObject.current.uv}`;
  crtVisibValue[0].textContent = `${todayWeatherDataObject.current.vis_km} Km`;
  crtCldCvrValue[0].textContent = `${todayWeatherDataObject.current.cloud} %`;

  let tempValueArr = [];
  let tempValueArrSorted = [];
  for (let c = 0; c < todayWeatherDataObject.forecast.forecastday[0].hour.length; c++) {
    tempValueArrSorted.push(Math.round(todayWeatherDataObject.forecast.forecastday[0].hour[c].temp_c));
  }
  tempValueArr = [...tempValueArrSorted];
  tempValueArrSorted.sort((a, b) => a - b);
  let graphCoord = {};
  let graphPoints = ``;
  if (tempValueArrSorted[tempValueArrSorted.length - 1] < 30) {
    hourlyTemperaturePoints[0].setAttribute("fill", `url("#tempGraphBackground-winter")`);
  } else {
    hourlyTemperaturePoints[0].setAttribute("fill", `url("#tempGraphBackground-summer")`);
  }
  for (let c = tempValueArrSorted[0], cordG = 245, cordT = 235; c <= tempValueArrSorted[tempValueArrSorted.length - 1]; c++, cordG -= 10, cordT -= 10) {
    graphCoord[c] = [cordG, cordT];
  }
  graphPoints = `
  0 250,0 100,0 0,
  0.01 ${graphCoord[tempValueArr[0]][0] - 10},
  55.75 ${graphCoord[tempValueArr[0]][0]},
  167.25 ${graphCoord[tempValueArr[1]][0]},
  278.75 ${graphCoord[tempValueArr[2]][0]},
  390.25 ${graphCoord[tempValueArr[3]][0]},
  501.75 ${graphCoord[tempValueArr[4]][0]},
  613.25 ${graphCoord[tempValueArr[5]][0]},
  724.75 ${graphCoord[tempValueArr[6]][0]},
  836.25 ${graphCoord[tempValueArr[7]][0]},
  947.75 ${graphCoord[tempValueArr[8]][0]},
  1059.25 ${graphCoord[tempValueArr[9]][0]},
  1170.75 ${graphCoord[tempValueArr[10]][0]},
  1282.25 ${graphCoord[tempValueArr[11]][0]},
  1393.75 ${graphCoord[tempValueArr[12]][0]},
  1505.25 ${graphCoord[tempValueArr[13]][0]},
  1616.75 ${graphCoord[tempValueArr[14]][0]},
  1728.25 ${graphCoord[tempValueArr[15]][0]},
  1839.75 ${graphCoord[tempValueArr[16]][0]},
  1951.25 ${graphCoord[tempValueArr[17]][0]},
  2062.75 ${graphCoord[tempValueArr[18]][0]},
  2174.25 ${graphCoord[tempValueArr[19]][0]},
  2285.75 ${graphCoord[tempValueArr[20]][0]},
  2397.25 ${graphCoord[tempValueArr[21]][0]},
  2508.75 ${graphCoord[tempValueArr[22]][0]},
  2620.25 ${graphCoord[tempValueArr[23]][0]},
  2676.00 ${graphCoord[tempValueArr[23]][0] + 10},
  2676.00 250`;
  hourlyTemperaturePoints[0].setAttribute("points", graphPoints);
  tableEl[0].scrollLeft = new Date().getHours() * (hourlyWeatherTime[0].offsetWidth + 2);
  for (let c = 0; c < todayWeatherDataObject.forecast.forecastday[0].hour.length; c++) {
    hourlyTemperatureValue[c].setAttribute("y", `${graphCoord[Math.round(todayWeatherDataObject.forecast.forecastday[0].hour[c].temp_c)][1]}`);
    hourlyTemperatureValue[c].innerHTML = `${Math.round(todayWeatherDataObject.forecast.forecastday[0].hour[c].temp_c)}&deg;`;
    hourlyWeatherIcon[c].src = `https:${todayWeatherDataObject.forecast.forecastday[0].hour[c].condition.icon}`;
    hourlyWeatherIcon[c].alt = todayWeatherDataObject.forecast.forecastday[0].hour[c].condition.text;
    hourlyWeatherDescription[c].textContent = todayWeatherDataObject.forecast.forecastday[0].hour[c].condition.text;
    hourlyWeatherWindIcon[c].style.transform = `rotate(${Number(todayWeatherDataObject.forecast.forecastday[0].hour[c].wind_degree - 180)}deg)`;
    hourlyWeatherWindDesc[c].textContent = `${todayWeatherDataObject.forecast.forecastday[0].hour[c].wind_kph} Km/h, ${defineWindDirection(todayWeatherDataObject.forecast.forecastday[0].hour[c].wind_degree)[1]}`;
    hourlyWeatherFlTemp[c].innerHTML = `${todayWeatherDataObject.forecast.forecastday[0].hour[c].feelslike_c}&deg;`;
    hourlyWeatherCloudCover[c].textContent = `${todayWeatherDataObject.forecast.forecastday[0].hour[c].cloud} %`;
    if (todayWeatherDataObject.forecast.forecastday[0].hour[c].chance_of_snow > 0) {
      hourlyWeatherPrecipPercen[c].textContent = `${todayWeatherDataObject.forecast.forecastday[0].hour[c].chance_of_snow} %`;
    } else {
      hourlyWeatherPrecipPercen[c].textContent = `${todayWeatherDataObject.forecast.forecastday[0].hour[c].chance_of_rain} %`;
    }
    hourlyWeatherPrecipVolume[c].textContent = `${todayWeatherDataObject.forecast.forecastday[0].hour[c].precip_mm} mm`;
  }
  document.getElementById(`${progBarChoice}`).click();

  updateDayNightTimingDetails();
  setInterval(updateDayNightTimingDetails, 60000);
  function updateDayNightTimingDetails() {
    for (let c = 0; c < todaySunriseValue.length; c++) {
      todaySunriseValue[c].textContent = convert12To24Hour(
        startDateString, 
        sunrise
      );
      todaySunsetValue[c].textContent = convert12To24Hour(
        startDateString, 
        sunset
      );
    }
    
    todayTotalDayHours[0].textContent = `${
      timeDifferenceCalculator(startDateString, sunrise, startDateString, sunset).hours
    }`;
    todayTotalDayMins[0].textContent = `${
      timeDifferenceCalculator(startDateString, sunrise, startDateString, sunset).minutes
    }`;
    
    if ((timeDifferenceCalculator(startDateString, "00:00", startDateString, sunrise).minutes + timeDifferenceCalculator(startDateString, sunset, endDateString, "00:00").minutes) > 59) {
      todayTotalNightHours[0].textContent = `${(
        timeDifferenceCalculator(startDateString, "00:00", startDateString, sunrise).hours
        +
        timeDifferenceCalculator(startDateString, sunset, endDateString, "00:00").hours
        +
        Math.trunc((
          timeDifferenceCalculator(startDateString, "00:00", startDateString, sunrise).minutes
          +
          timeDifferenceCalculator(startDateString, sunset, endDateString, "00:00").minutes
          ) / 60))}`;
      todayTotalNightMins[0].textContent = `${((
        timeDifferenceCalculator(startDateString, "00:00", startDateString, sunrise).minutes
        +
        timeDifferenceCalculator(startDateString, sunset, endDateString, "00:00").minutes
        ) % 60)}`;
    } else {
      todayTotalNightHours[0].textContent = `${(
        timeDifferenceCalculator(startDateString, "00:00", startDateString, sunrise).hours + 
        timeDifferenceCalculator(startDateString, sunset, endDateString, "00:00").hours
      )}`;
      todayTotalNightMins[0].textContent = `${(
        timeDifferenceCalculator(startDateString, "00:00", startDateString, sunrise).minutes + 
        timeDifferenceCalculator(startDateString, sunset, endDateString, "00:00").minutes
      )}`;
    }

    if ((new Date(`${startDateString} ${sunrise}`) - new Date()) >= 0) {
      // console.log("Before sunrise");
      todayRemainDayHours[0].textContent = `${
        timeDifferenceCalculator(startDateString, sunrise, startDateString, sunset).hours
      }`;
      todayRemainDayMins[0].textContent = `${
        timeDifferenceCalculator(startDateString, sunrise, startDateString, sunset).minutes
      }`;
    } else if ((new Date(`${startDateString} ${sunset}`) - new Date()) >= 0) {
      // console.log("Before sunset");
      todayRemainDayHours[0].textContent = `${
        timeDifferenceCalculator(new Date(), "", startDateString, sunset).hours
      }`;
      todayRemainDayMins[0].textContent = `${
        timeDifferenceCalculator(new Date(), "", startDateString, sunset).minutes
      }`;
    } else {
      // console.log("After sunset");
      todayRemainDayHours[0].textContent = 0;
      todayRemainDayMins[0].textContent = 0;
    }

    if (
      (timeDifferenceCalculator(new Date(), "", startDateString, sunrise).minutes +
      timeDifferenceCalculator(startDateString, sunset, endDateString, "00:00").minutes) > 59 
      || 
      (timeDifferenceCalculator(startDateString, sunset, endDateString, "00:00").minutes) > 59 
      || 
      (timeDifferenceCalculator(new Date(), "", endDateString, "00:00 AM").minutes) > 59
      ) {
        if ((new Date(`${startDateString} ${sunrise}`) - new Date()) >= 0) {
          // console.log("11");
          todayRemainNightHours[0].textContent = `${
            timeDifferenceCalculator(new Date(), "", startDateString, sunrise).hours + 
            timeDifferenceCalculator(startDateString, sunset, endDateString, "00:00").hours + 
            Math.trunc((
              timeDifferenceCalculator(new Date(), "", startDateString, sunrise).minutes + timeDifferenceCalculator(startDateString, sunset, endDateString, "00:00").minutes) / 60)
          }`;
          todayRemainNightMins[0].textContent = `${((
            timeDifferenceCalculator(new Date(), "", startDateString, sunrise).minutes + 
            timeDifferenceCalculator(startDateString, sunset, endDateString, "00:00").minutes
          ) % 60)
          }`;
        } else if ((new Date(`${startDateString} ${sunset}`) - new Date()) >= 0) {
          // console.log("12");
          todayRemainNightHours[0].textContent = `${
            timeDifferenceCalculator(startDateString, sunset, endDateString, "00:00").hours +
            Math.trunc((
              timeDifferenceCalculator(startDateString, sunset, endDateString, "00:00").minutes) / 60)
          }`;
          todayRemainNightMins[0].textContent = `${((
            timeDifferenceCalculator(startDateString, sunset, endDateString, "00:00").minutes
          ) % 60)
          }`;
        } else {
          // console.log("13");
          todayRemainNightHours[0].textContent = `${
            timeDifferenceCalculator(new Date(), "", endDateString, "00:00 AM").hours +
            Math.trunc((timeDifferenceCalculator(new Date(), "", endDateString, "00:00 AM").minutes) / 60)
          }`;
          todayRemainNightMins[0].textContent = `${((
            timeDifferenceCalculator(new Date(), "", endDateString, "00:00 AM").minutes
          ) % 60)
          }`;
        }
    } else {
      if ((new Date(`${startDateString} ${sunrise}`) - new Date()) >= 0) {
        // console.log("21");
        todayRemainNightHours[0].textContent = `${
          timeDifferenceCalculator(new Date(), "", startDateString, sunrise).hours + 
          timeDifferenceCalculator(startDateString, sunset, endDateString, "00:00").hours
        }`;
        todayRemainNightMins[0].textContent = `${
          timeDifferenceCalculator(new Date(), "", startDateString, sunrise).minutes + 
          timeDifferenceCalculator(startDateString, sunset, endDateString, "00:00").minutes
        }`;
      } else if ((new Date(`${startDateString} ${sunset}`) - new Date()) >= 0) {
        // console.log("22");
        todayRemainNightHours[0].textContent = `${
          timeDifferenceCalculator(startDateString, sunset, endDateString, "00:00").hours
        }`;
        todayRemainNightMins[0].textContent = `${
          timeDifferenceCalculator(startDateString, sunset, endDateString, "00:00").minutes
        }`;
      } else {
        // console.log("23");
        todayRemainNightHours[0].textContent = `${
          timeDifferenceCalculator(new Date(), "", endDateString, "00:00 AM").hours
        }`;
        todayRemainNightMins[0].textContent = `${
          timeDifferenceCalculator(new Date(), "", endDateString, "00:00 AM").minutes
        }`;
      }  
    }
  }

  let fWindDegreeAvg = 0;
  let fCldCvrValueAvg = 0;
  for (let c = 0; c < 24; c++) {
    fWindDegreeAvg += todayWeatherDataObject.forecast.forecastday[0].hour[c].wind_degree;
    fCldCvrValueAvg += todayWeatherDataObject.forecast.forecastday[0].hour[c].cloud;
    fHourlyTemp[c].innerHTML = `${Math.round(todayWeatherDataObject.forecast.forecastday[0].hour[c].temp_c)}&deg;`;
    fHourlyWeatherIcon[c].src = `https:${todayWeatherDataObject.forecast.forecastday[0].hour[c].condition.icon}`;
    fHourlyWeatherIcon[c].alt = todayWeatherDataObject.forecast.forecastday[0].hour[c].condition.text;
  }
  fWindDegreeAvg = Math.round(fWindDegreeAvg / 24);
  fCldCvrValueAvg = Math.round(fCldCvrValueAvg / 24);

  fWeatherDesc[0].textContent = todayWeatherDataObject.forecast.forecastday[0].day.condition.text;
  fWeatherIcon[0].src = `https:${todayWeatherDataObject.forecast.forecastday[0].day.condition.icon}`;
  fWeatherIcon[0].alt = todayWeatherDataObject.forecast.forecastday[0].day.condition.text;
  fMaxTemp[0].innerHTML = `${todayWeatherDataObject.forecast.forecastday[0].day.maxtemp_c}&deg;`;
  fMinTemp[0].innerHTML = `${todayWeatherDataObject.forecast.forecastday[0].day.mintemp_c}&deg;`;
  fWindSpeedNDirec[0].innerHTML = `${todayWeatherDataObject.forecast.forecastday[0].day.maxwind_kph} Km/h, ${defineWindDirection(fWindDegreeAvg)[0]}`;
  if (todayWeatherDataObject.forecast.forecastday[0].day.daily_chance_of_snow > 0) {
    fPrecipVolNPerc[0].textContent = `${todayWeatherDataObject.forecast.forecastday[0].day.daily_chance_of_snow} %, ${todayWeatherDataObject.forecast.forecastday[0].day.totalprecip_mm} mm`;
  } else {
    fPrecipVolNPerc[0].textContent = `${todayWeatherDataObject.forecast.forecastday[0].day.daily_chance_of_rain} %, ${todayWeatherDataObject.forecast.forecastday[0].day.totalprecip_mm} mm`;
  }
  fCldCvr[0].textContent = `${fCldCvrValueAvg} %`;
  fSunrise[0].textContent = convert12To24Hour(
    startDateString, 
    sunrise
  );
  fSunset[0].textContent = convert12To24Hour(
    startDateString, 
    sunset
  );
  for (let c = 0; c < loadingPage.length; c++) {
    loadingPage[c].style.display = "none";
  }
}
/* Render Today Tab Data function - renders data on the "Today" tab as well as on the "Today" card in forecast tab - The functionality ends here */

/* Render Tomorrow Tab Data function - renders data on the "Tomorrow" tab as well as on the "Tomorrow" card in forecast tab - The functionality starts here */
async function renderTomorrowTabData(tomorrowWeatherDataObject) {
  // console.log(tomorrowWeatherDataObject);
  let tmwWindDegreeAvg = 0;
  let tmwPresrValueAvg = 0;
  let tmwCldCvrValueAvg = 0;
  for (let c = 0; c < 24; c++) {
    tmwWindDegreeAvg += tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].wind_degree;
    tmwPresrValueAvg += tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].pressure_mb;
    tmwCldCvrValueAvg += tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].cloud;
  }
  tmwWindDegreeAvg = Math.round(tmwWindDegreeAvg / 24);
  tmwPresrValueAvg = Math.round(tmwPresrValueAvg / 24);
  tmwCldCvrValueAvg = Math.round(tmwCldCvrValueAvg / 24);

  const tomorrowDateObject = dateConvertor(new Date(tomorrowWeatherDataObject.forecast.forecastday[1].date));
  tmwDay[0].textContent = tomorrowDateObject.day;
  tmwDate[0].textContent = tomorrowDateObject.date;
  tmwMonth[0].textContent = tomorrowDateObject.month;
  tmwYear[0].textContent = tomorrowDateObject.year;
  
  tmwMaxTempValue[0].textContent = tomorrowWeatherDataObject.forecast.forecastday[1].day.maxtemp_c;
  tmwMinTempValue[0].textContent = tomorrowWeatherDataObject.forecast.forecastday[1].day.mintemp_c;
  tmwWeatherIcon[0].src = `https:${tomorrowWeatherDataObject.forecast.forecastday[1].day.condition.icon}`;
  tmwWeatherIcon[0].alt = tomorrowWeatherDataObject.forecast.forecastday[1].day.condition.text;
  tmwWeatherIconDesc[0].textContent = tomorrowWeatherDataObject.forecast.forecastday[1].day.condition.text;
  tmwWeatherWindIcon[0].style.transform = `rotate(${Number(tmwWindDegreeAvg - 180)}deg)`;
  tmwWeatherWindSpeed[0].textContent = `${tomorrowWeatherDataObject.forecast.forecastday[1].day.maxwind_kph} Km/h,`;
  tmwWeatherWindDirection[0].textContent = `${defineWindDirection(tmwWindDegreeAvg)[0]}`;
  tmwPrecpValue[0].textContent = `${tomorrowWeatherDataObject.forecast.forecastday[1].day.totalprecip_mm} mm`;
  tmwHmdtValue[0].textContent = `${tomorrowWeatherDataObject.forecast.forecastday[1].day.avghumidity} %`;
  tmwPresrValue[0].textContent = `${tmwPresrValueAvg} mBar`;
  tmwUVValue[0].textContent = `${tomorrowWeatherDataObject.forecast.forecastday[1].day.uv}`;
  tmwVisibValue[0].textContent = `${tomorrowWeatherDataObject.forecast.forecastday[1].day.avgvis_km} Km`;
  tmwCldCvrValue[0].textContent = `${tmwCldCvrValueAvg} %`;

  let tempValueArr = [];
  let tempValueArrSorted = [];
  for (let c = 0; c < tomorrowWeatherDataObject.forecast.forecastday[1].hour.length; c++) {
    tempValueArrSorted.push(Math.round(tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].temp_c));
  }
  tempValueArr = [...tempValueArrSorted];
  tempValueArrSorted.sort((a, b) => a - b);
  let graphCoord = {};
  let graphPoints = ``;
  if (tempValueArrSorted[tempValueArrSorted.length - 1] < 30) {
    tmwHourlyTemperaturePoints[0].setAttribute("fill", `url("#tmwTempGraphBackground-winter")`);
  } else {
    tmwHourlyTemperaturePoints[0].setAttribute("fill", `url("#tmwTempGraphBackground-summer")`);
  }
  for (let c = tempValueArrSorted[0], cordG = 245, cordT = 235; c <= tempValueArrSorted[tempValueArrSorted.length - 1]; c++, cordG -= 10, cordT -= 10) {
    graphCoord[c] = [cordG, cordT];
  }
  graphPoints = `
  0 250,0 100,0 0,
  0.01 ${graphCoord[tempValueArr[0]][0] - 10},
  55.75 ${graphCoord[tempValueArr[0]][0]},
  167.25 ${graphCoord[tempValueArr[1]][0]},
  278.75 ${graphCoord[tempValueArr[2]][0]},
  390.25 ${graphCoord[tempValueArr[3]][0]},
  501.75 ${graphCoord[tempValueArr[4]][0]},
  613.25 ${graphCoord[tempValueArr[5]][0]},
  724.75 ${graphCoord[tempValueArr[6]][0]},
  836.25 ${graphCoord[tempValueArr[7]][0]},
  947.75 ${graphCoord[tempValueArr[8]][0]},
  1059.25 ${graphCoord[tempValueArr[9]][0]},
  1170.75 ${graphCoord[tempValueArr[10]][0]},
  1282.25 ${graphCoord[tempValueArr[11]][0]},
  1393.75 ${graphCoord[tempValueArr[12]][0]},
  1505.25 ${graphCoord[tempValueArr[13]][0]},
  1616.75 ${graphCoord[tempValueArr[14]][0]},
  1728.25 ${graphCoord[tempValueArr[15]][0]},
  1839.75 ${graphCoord[tempValueArr[16]][0]},
  1951.25 ${graphCoord[tempValueArr[17]][0]},
  2062.75 ${graphCoord[tempValueArr[18]][0]},
  2174.25 ${graphCoord[tempValueArr[19]][0]},
  2285.75 ${graphCoord[tempValueArr[20]][0]},
  2397.25 ${graphCoord[tempValueArr[21]][0]},
  2508.75 ${graphCoord[tempValueArr[22]][0]},
  2620.25 ${graphCoord[tempValueArr[23]][0]},
  2676.00 ${graphCoord[tempValueArr[23]][0] + 10},
  2676.00 250`;
  tmwHourlyTemperaturePoints[0].setAttribute("points", graphPoints);
  for (let c = 0; c < tomorrowWeatherDataObject.forecast.forecastday[1].hour.length; c++) {
    tmwHourlyTemperatureValue[c].setAttribute("y", `${graphCoord[Math.round(tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].temp_c)][1]}`);
    tmwHourlyTemperatureValue[c].innerHTML = `${Math.round(tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].temp_c)}&deg;`;
    tmwHourlyWeatherIcon[c].src = `https:${tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].condition.icon}`;
    tmwHourlyWeatherIcon[c].alt = tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].condition.text;
    tmwHourlyWeatherDescription[c].textContent = tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].condition.text;
    tmwHourlyWeatherWindIcon[c].style.transform = `rotate(${Number(tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].wind_degree - 180)}deg)`;
    tmwHourlyWeatherWindDesc[c].textContent = `${tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].wind_kph} Km/h, ${defineWindDirection(tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].wind_degree)[1]}`;
    tmwHourlyWeatherFlTemp[c].innerHTML = `${tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].feelslike_c}&deg;`;
    tmwHourlyWeatherCloudCover[c].textContent = `${tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].cloud} %`;
    if (tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].chance_of_snow > 0) {
      tmwHourlyWeatherPrecipPercen[c].textContent = `${tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].chance_of_snow} %`;
    } else {
      tmwHourlyWeatherPrecipPercen[c].textContent = `${tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].chance_of_rain} %`;
    }
    tmwHourlyWeatherPrecipVolume[c].textContent = `${tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].precip_mm} mm`;
  }

  const tmwStartDateString = tomorrowWeatherDataObject.forecast.forecastday[1].date;
  const tmwEndDateString = tomorrowWeatherDataObject.forecast.forecastday[2].date;
  const tmwSunrise = tomorrowWeatherDataObject.forecast.forecastday[1].astro.sunrise;
  const tmwSunset = tomorrowWeatherDataObject.forecast.forecastday[1].astro.sunset;
  tmwSunriseValue[0].textContent = convert12To24Hour(
    tmwStartDateString, 
    tmwSunrise
    );
  tmwSunsetValue[0].textContent = convert12To24Hour(
    tmwStartDateString, 
    tmwSunset
    );
  for (let c = 0; c < tmwDayHours.length; c++) {
    tmwDayHours[c].textContent = `${
      timeDifferenceCalculator(tmwStartDateString, tmwSunrise, tmwStartDateString, tmwSunset).hours
      }`;
    tmwDayMins[c].textContent = `${
      timeDifferenceCalculator(tmwStartDateString, tmwSunrise, tmwStartDateString, tmwSunset).minutes
      }`;
  }
  if ((timeDifferenceCalculator(tmwStartDateString, "00:00", tmwStartDateString, tmwSunrise).minutes + timeDifferenceCalculator(tmwStartDateString, tmwSunset, tmwEndDateString, "00:00").minutes) > 59) {
    for (let c = 0; c < tmwNightHours.length; c++) {
      tmwNightHours[c].textContent = `${(
        timeDifferenceCalculator(tmwStartDateString, "00:00", tmwStartDateString, tmwSunrise).hours
        +
        timeDifferenceCalculator(tmwStartDateString, tmwSunset, tmwEndDateString, "00:00").hours
        +
        Math.trunc((
          timeDifferenceCalculator(tmwStartDateString, "00:00", tmwStartDateString, tmwSunrise).minutes
          +
          timeDifferenceCalculator(tmwStartDateString, tmwSunset, tmwEndDateString, "00:00").minutes
          ) / 60))}`;
      tmwNightMins[c].textContent = `${((
        timeDifferenceCalculator(tmwStartDateString, "00:00", tmwStartDateString, tmwSunrise).minutes
        +
        timeDifferenceCalculator(tmwStartDateString, tmwSunset, tmwEndDateString, "00:00").minutes
        ) % 60)}`;
    }
  } else {
    for (let c = 0; c < tmwNightHours.length; c++) {
      tmwNightHours[c].textContent = `${(
        timeDifferenceCalculator(tmwStartDateString, "00:00", tmwStartDateString, tmwSunrise).hours 
        + 
        timeDifferenceCalculator(tmwStartDateString, tmwSunset, tmwEndDateString, "00:00").hours
        )}`;
      tmwNightMins[c].textContent = `${(
        timeDifferenceCalculator(tmwStartDateString, "00:00", tmwStartDateString, tmwSunrise).minutes 
        + 
        timeDifferenceCalculator(tmwStartDateString, tmwSunset, tmwEndDateString, "00:00").minutes
        )}`;
    }
  }

  let fWindDegreeAvg = 0;
  let fCldCvrValueAvg = 0;
  for (let c = 0; c < 24; c++) {
    fWindDegreeAvg += tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].wind_degree;
    fCldCvrValueAvg += tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].cloud;
    fHourlyTemp[24 + c].innerHTML = `${Math.round(tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].temp_c)}&deg;`;
    fHourlyWeatherIcon[24 + c].src = `https:${tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].condition.icon}`;
    fHourlyWeatherIcon[24 + c].alt = tomorrowWeatherDataObject.forecast.forecastday[1].hour[c].condition.text;
  }
  fWindDegreeAvg = Math.round(fWindDegreeAvg / 24);
  fCldCvrValueAvg = Math.round(fCldCvrValueAvg / 24);

  fDay[1].textContent = tomorrowDateObject.day;
  fDate[1].textContent = tomorrowDateObject.date;
  fMonth[1].textContent = tomorrowDateObject.month;
  fWeatherDesc[1].textContent = tomorrowWeatherDataObject.forecast.forecastday[1].day.condition.text;
  fWeatherIcon[1].src = `https:${tomorrowWeatherDataObject.forecast.forecastday[1].day.condition.icon}`;
  fWeatherIcon[1].alt = tomorrowWeatherDataObject.forecast.forecastday[1].day.condition.text;
  fMaxTemp[1].innerHTML = `${tomorrowWeatherDataObject.forecast.forecastday[1].day.maxtemp_c}&deg;`;
  fMinTemp[1].innerHTML = `${tomorrowWeatherDataObject.forecast.forecastday[1].day.mintemp_c}&deg;`;
  fWindSpeedNDirec[1].innerHTML = `${tomorrowWeatherDataObject.forecast.forecastday[1].day.maxwind_kph} Km/h, ${defineWindDirection(fWindDegreeAvg)[0]}`;
  if (tomorrowWeatherDataObject.forecast.forecastday[0].day.daily_chance_of_snow > 0) {
    fPrecipVolNPerc[1].textContent = `${tomorrowWeatherDataObject.forecast.forecastday[1].day.daily_chance_of_snow} %, ${tomorrowWeatherDataObject.forecast.forecastday[1].day.totalprecip_mm} mm`;
  } else {
    fPrecipVolNPerc[1].textContent = `${tomorrowWeatherDataObject.forecast.forecastday[1].day.daily_chance_of_rain} %, ${tomorrowWeatherDataObject.forecast.forecastday[1].day.totalprecip_mm} mm`;
  }
  fCldCvr[1].textContent = `${fCldCvrValueAvg} %`;
  fSunrise[1].textContent = convert12To24Hour(
    tmwStartDateString, 
    tmwSunrise
  );
  fSunset[1].textContent = convert12To24Hour(
    tmwStartDateString, 
    tmwSunset
  );
  for (let c = 0; c < loadingPage.length; c++) {
    loadingPage[c].style.display = "none";
  }
}
/* Render Tomorrow Tab Data function - renders data on the "Tomorrow" tab as well as on the "Tomorrow" card in forecast tab - The functionality ends here */

/* Render Forecast Tab Data function - fetches forecast data (for 10 days) from another third party API (Open Meteo) based on the coordinates provided and renders that data to the respective cards on the forecast tab - The functionality starts here */
async function renderForecastTabData(lat, lon) {
  // console.log(lat);
  // console.log(lon);
  let getForecastWeatherData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weather_code,cloud_cover&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_direction_10m_dominant&timezone=auto&forecast_days=10`);
  const getForecastWeatherDataObject = await getForecastWeatherData.json();
  // console.log(getForecastWeatherDataObject);
  const weatherCodeDesc = {
    0: [ "Clear Sky", 113 ],
    1: [ "Mainly Clear", 113 ],
    2: [ "Partly Cloudly", 116 ],
    3: [ "Overcast", 122 ],
    45: [ "Fog", 248 ],
    48: [ "Fog", 248 ],
    51: [ "Light Shower", 266 ],
    53: [ "Moderate Shower", 266 ],
    55: [ "Heavy Shower", 266 ],
    56: [ "Light Snow", 281 ],
    57: [ "Heavy Snow", 284 ],
    61: [ "Light Rain", 296 ],
    63: [ "Moderate Rain", 296 ],
    65: [ "Heavy Rain", 308 ],
    66: [ "Light Rain", 311 ],
    67: [ "Heavy Rain", 311 ],
    71: [ "Light Snow fall", 326 ],
    73: [ "Moderate Snow fall", 326 ],
    75: [ "Heavy Snow fall", 338 ],
    77: [ "Snow Fall", 326 ],
    80: [ "Light Rain Showers", 353 ],
    81: [ "Moderate Rain Showers", 356 ],
    82: [ "Heavy Rain Showers", 356 ],
    85: [ "Light Snow Showers", 368 ],
    86: [ "Heavy Snow Showers", 371 ],
    95: [ "Thunderstorm", 386 ],
    96: [ "Thunderstorm", 389 ],
    99: [ "Thunderstorm", 389 ]
  }
  let fCldCvrSum = 0;
  for (let c = 2; c < getForecastWeatherDataObject.daily.time.length; c++) {
    let dateObject = dateConvertor(new Date(getForecastWeatherDataObject.daily.time[c]));
    fDay[c].textContent = dateObject.day;
    fDate[c].textContent = dateObject.date;
    fMonth[c].textContent = dateObject.month;
    fWeatherDesc[c].textContent = weatherCodeDesc[getForecastWeatherDataObject.daily.weather_code[c]][0];
    fWeatherIcon[c].src = `https://cdn.weatherapi.com/weather/64x64/day/${weatherCodeDesc[getForecastWeatherDataObject.daily.weather_code[c]][1]}.png`;
    fWeatherIcon[c].alt = weatherCodeDesc[getForecastWeatherDataObject.daily.weather_code[c]][0];
    fMaxTemp[c].innerHTML = `${getForecastWeatherDataObject.daily.temperature_2m_max[c]}&deg;`;
    fMinTemp[c].innerHTML = `${getForecastWeatherDataObject.daily.temperature_2m_min[c]}&deg;`;
    fWindSpeedNDirec[c].innerHTML = `${getForecastWeatherDataObject.daily.wind_speed_10m_max[c]} Km/h, ${defineWindDirection(getForecastWeatherDataObject.daily.wind_direction_10m_dominant[c])[0]}`;
    fPrecipVolNPerc[c].textContent = `${getForecastWeatherDataObject.daily.precipitation_probability_max[c]} %, ${getForecastWeatherDataObject.daily.precipitation_sum[c]} mm`;
    for (let c1 = (24 * c); c1 < (24 * (c + 1)); c1++) {
      fCldCvrSum += getForecastWeatherDataObject.hourly.cloud_cover[c1];
      fHourlyTemp[c1].innerHTML = `${Math.round(getForecastWeatherDataObject.hourly.temperature_2m[c1])}&deg;`;
      if (5 < c1 % 24 && c1 % 24 < 18) {
        fHourlyWeatherIcon[c1].src = `https://cdn.weatherapi.com/weather/64x64/day/${weatherCodeDesc[getForecastWeatherDataObject.hourly.weather_code[c1]][1]}.png`;
      } else {
        fHourlyWeatherIcon[c1].src = `https://cdn.weatherapi.com/weather/64x64/night/${weatherCodeDesc[getForecastWeatherDataObject.hourly.weather_code[c1]][1]}.png`;
      }
      fHourlyWeatherIcon[c1].alt = weatherCodeDesc[getForecastWeatherDataObject.hourly.weather_code[c1]][0];
    }
    fCldCvr[c].textContent = `${Math.round(fCldCvrSum/24)} %`;
    fCldCvrSum = 0;
    let tempConvert = getForecastWeatherDataObject.daily.sunrise[c].split("T");
    fSunrise[c].textContent = convert12To24Hour(
      tempConvert[0], 
      tempConvert[1]
      );
    tempConvert = getForecastWeatherDataObject.daily.sunset[c].split("T");
    fSunset[c].textContent = convert12To24Hour(
      tempConvert[0], 
      tempConvert[1]
      );
  }
  for (let c = 0; c < loadingPage.length; c++) {
    loadingPage[c].style.display = "none";
  }
}
/* Render Forecast Tab Data function - fetches forecast data (for 10 days) from another third party API (Open Meteo) based on the coordinates provided and renders that data to the respective cards on the forecast tab - The functionality ends here */

/* User Data Creator function - creates user data from the arguments provided and saves it to the local storage - This function is called in "getUserLocationAndWeatherData" function - The functionality starts here */
function userDataCreator(location, progressBarChoice, backgroundChoice) {
  function UserDataCreatorObjConstr(
    latitude, 
    longitude, 
    cityName, 
    stateName, 
    countryName, 
    progressBarChoice,
    backgroundChoice
  ) {
    this.location = { latitude: latitude, longitude: longitude };
    this.address = { city: cityName, state: stateName, country: countryName};
    this.progressBarChoice = progressBarChoice;
    this.backgroundChoice = backgroundChoice;
  }
  userDataObj = new UserDataCreatorObjConstr(
    location.lat, 
    location.lon, 
    location.name,
    location.region,
    location.country,
    progressBarChoice,
    backgroundChoice
  );
  localStorage.setItem("weather_app_userDataObj", JSON.stringify(userDataObj));
}
/* User Data Creator function - creates user data from the arguments provided and saves it to the local storage - This function is called in "getUserLocationAndWeatherData" function - The functionality ends here */

/* Background Gradient Changer function - checks for time and changes the page's background gradient accordingly in realtime - This function is called in the settings option with ID "liveGradient" - The functionality starts here */
function backgroundGradientChanger(startDate, sunrise, sunset) {
  /* 
  DONE - From sunset to 1 hour before sunrise - #3F329A
  DONE - From 1 hour before sunrise to sunrise - #7B92E8
  DONE - From sunrise to 1 hour before sunset - #C9FFFF
  DONE - From 1 hour before sunset to sunset - #FAD415
   */
  const currentTime = new Date();
  const sunriseTime = new Date(`${startDate} ${sunrise}`);
  const sunsetTime = new Date(`${startDate} ${sunset}`);
  if (
    sunriseTime.getTime() - 3600000 <= currentTime.getTime() 
    && 
    currentTime.getTime() < sunriseTime.getTime()
    ) {
    /* From 1 hour before sunrise to sunrise - #7B92E8 */
    // console.log("#7B92E8");
    mapContainerdiv.style.background = `#7B92E8`;
  } else if (
    sunriseTime.getTime() <= currentTime.getTime()
    &&
    currentTime.getTime() < sunsetTime.getTime() - 3600000 
    ) {
    /* From sunrise to 1 hour before sunset - #C9FFFF */
    // console.log("#C9FFFF");
    mapContainerdiv.style.background = `#C9FFFF`;
  } else if (
    sunsetTime.getTime() - 3600000 <= currentTime.getTime() 
    && 
    currentTime.getTime() < sunsetTime.getTime()
    ) {
    /* From 1 hour before sunset to sunset - #FAD415 */
    // console.log("#FAD415");
    mapContainerdiv.style.background = `#FAD415`;
  } else {
    /* From sunset to 1 hour before sunrise - #3F329A */
    // console.log("Default - From sunset to 1 hour before sunrise");
    // console.log("#3F329A");
    mapContainerdiv.style.background = `rgba(97, 75, 255, 0.9)`;
  }
}
/* Background Gradient Changer function - checks for time and changes the page's background gradient accordingly in realtime - This function is called in the settings option with ID "liveGradient" - The functionality ends here */

/* Background Map Fetch and Render function - changes the page's background with the map of respective city when the user switches the app background to city map - This fucntion is called in the settings option with ID "cityMap" - The functionality starts here */
function backgroundMapFetchAndRender(city, state, country) {
  mapContainerdiv.innerHTML = `
  <iframe
    width="99.7288%"
    height="99.7288%"
    frameborder="0"
    style="border:0;"
    title="Google Map Background for ${city}, ${state}"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115133.01634123542!2d85.0606413520427!3d25.608014355294745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2s${city}%2C%20${state}%2C%20${country}!5e0!3m2!1sen!2sin!4v1705910248902!5m2!1sen!2sin">
  </iframe>`;
}
/* Background Map Fetch and Render function - changes the page's background with the map of respective city when the user switches the app background to city map - This fucntion is called in the settings option with ID "cityMap" - The functionality ends here */

/* Update All Time and Date Elements function - updates all the time and date elements of today (in "Today" tab and "Forecast - Today card") in realtime (every second) - This function is called in the "renderTodayTabData" function - The functionality starts here */
function updateAllTimeAndDateEl() {
  const timeAndDate = new Date();

  time(timeAndDate);
  todayDay[0].textContent = dateConvertor(timeAndDate).day;
  todayDate[0].textContent = dateConvertor(timeAndDate).date;
  todayMonth[0].textContent = dateConvertor(timeAndDate).month;
  todayYear[0].textContent = dateConvertor(timeAndDate).year;
  
  fDay[0].textContent = dateConvertor(timeAndDate).day;
  fDate[0].textContent = dateConvertor(timeAndDate).date;
  fMonth[0].textContent = dateConvertor(timeAndDate).month;
  progressStatus(timeAndDate);
  if (timeAndDate.getHours() == 0 && timeAndDate.getMinutes() == 0) {
    location.reload();
  }
}
/* Update All Time and Date Elements function - updates all the time and date elements of today (in "Today" tab and "Forecast - Today card") in realtime (every second) - This function is called in the "renderTodayTabData" function - The functionality ends here */

/* Update Time function - renders time data in "Today" tab - This function is called inside "updateAllTimeAndDateEl" function - The functionality starts here */
function time(time) {
  for (let c = 0; c < todayHour.length; c++) {
    todayHour[c].textContent = time.getHours().toString().padStart(2, "0");
  }
  for (let c = 0; c < todayMinute.length; c++) {
    todayMinute[c].textContent = time.getMinutes().toString().padStart(2, "0");
  }
  for (let c = 0; c < todaySecond.length; c++) {
    todaySecond[c].textContent = time.getSeconds().toString().padStart(2, "0");
  }
}
/* Update Time function - renders time data in "Today" tab - This function is called inside "updateAllTimeAndDateEl" function - The functionality ends here */

/* Today Progress Bar Data Updater function - updates the progress bar (both straight and circular) and percentage data in Today Tab - This function is called inside "updateAllTimeAndDateEl" function - The functionality starts here */
function progressStatus(date) {
  const now = date;
  const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dayPassedPercent = ((((now - dayStart) / 1000) / 86400) * 100).toFixed(2);
  todayProgressIndicator[0].style.width = `${dayPassedPercent}%`;
  todayProgressIndicatorCir[0].style.strokeDashoffset = `${(288 - (dayPassedPercent * 2.88)).toFixed(2)}%`;
  todayProgressPercent[0].textContent = dayPassedPercent;
  todayProgressPercent[1].textContent = dayPassedPercent;
}
/* Today Progress Bar Data Updater function - updates the progress bar (both straight and circular) and percentage data in Today Tab - This function is called inside "updateAllTimeAndDateEl" function - The functionality ends here */


/* Supporter Functions starts here */


/* Irrelevant Character (Space and "&/ampersand") Remover function - This function takes any string and removes any space and ampersand character from it and returns a url ready string for the "backgroundMapFetchAndRender" function - This function is called as argument to "backgroundMapFetchAndRender" function in the same setting option - The functionality starts here */
function irrelevantCharacterRemover(string) {
  let checkCharacters = /[\s]|[&]/gim;
  let charactersNotRequired = string.match(checkCharacters);
  return charactersNotRequired !== null ? string.replaceAll(checkCharacters, (character) => {
    switch (character) {
      case " ":
        return "%20";
      case "&":
        return "%26";
      default:
        return character;
    }
  }) : string;
}
/* Irrelevant Character (Space and "&/ampersand") Remover function - This function takes any string and removes any space and ampersand character from it and returns a url ready string for the "backgroundMapFetchAndRender" function - This function is called as argument to "backgroundMapFetchAndRender" function in the same setting option - The functionality ends here */

/* Date formatter function - generates formatted date object - This function is called inside "updateAllTimeAndDateEl", "renderTomorrowTabData" and "renderForecastTabData" function - The functionality starts here */
function dateConvertor(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return {
    day: days[date.getDay()],
    date: date.getDate(),
    month: months[date.getMonth()],
    year: date.getFullYear()
  }
}
/* Date formatter function - generates formatted date object - This function is called inside "updateAllTimeAndDateEl", "renderTomorrowTabData" and "renderForecastTabData" function - The functionality ends here */

/* Wind Direction Definer function - generates wind direction string in both long and short form from wind degree provided - This function is called inside "renderTodayTabData", "renderTomorrowTabData" and "renderForecastTabData" function - The functionality starts here */
function defineWindDirection(windDegree) {
  if (338 < windDegree && windDegree <= 360) {
    return [`North`, `N`];
  } else if (0 <= windDegree && windDegree <= 23) {
    return [`North`, `N`];
  } else if (23 < windDegree && windDegree <= 68) {
    return [`North East`, `NE`];
  } else if (68 < windDegree && windDegree <= 113) {
    return [`East`, `E`];
  } else if (113 < windDegree && windDegree <= 158) {
    return [`South East`, `SE`];
  } else if (158 < windDegree && windDegree <= 203) {
    return [`South`, `S`];
  } else if (203 < windDegree && windDegree <= 248) {
    return [`South West`, `SW`];
  } else if (248 < windDegree && windDegree <= 293) {
    return [`West`, `W`];
  } else if (293 < windDegree && windDegree <= 338) {
    return [`North West`, `NW`];
  }
}
/* Wind Direction Definer function - generates wind direction string in both long and short form from wind degree provided - This function is called inside "renderTodayTabData", "renderTomorrowTabData" and "renderForecastTabData" function - The functionality ends here */

/* 12 to 24 Hour Time Convertor function - takes date and time string and outputs 24 hour time accordingly - This function is called inside "renderTodayTabData", "renderTomorrowTabData" and "renderForecastTabData" function - The functionality starts here */
function convert12To24Hour(dateString, timeString) {
  let date = new Date(`${dateString} ${timeString}`);
  return date
    .toLocaleTimeString('en-US', { hour12: false })
    .split(":")
    .slice(0, 2)
    .join(" : ");
}
/* 12 to 24 Hour Time Convertor function - takes date and time string and outputs 24 hour time accordingly - This function is called inside "renderTodayTabData", "renderTomorrowTabData" and "renderForecastTabData" function - The functionality ends here */

/* Time Difference Calculator function - takes start and end date and time both in both and returns the difference between them in hours and minutes - This function is called inside "renderTodayTabData", "renderTomorrowTabData" function - The functionality starts here */
function timeDifferenceCalculator(startDate, startTime, endDate, endTime) {
  const start = new Date(`${startDate} ${startTime}`);
  const end = new Date(`${endDate} ${endTime}`);
  return {
    hours: Math.floor((end - start) / (1000 * 60 * 60)),
    minutes: Math.floor((end - start) % (1000 * 60 * 60) / (1000 * 60))
  }
}
/* Time Difference Calculator function - takes start and end date and time both in both and returns the difference between them in hours and minutes - This function is called inside "renderTodayTabData", "renderTomorrowTabData" function - The functionality ends here */


/* Supporter Functions ends here */

/* ========================
Simple Weather App JS Code ends here.
======================== */