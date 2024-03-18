
//import { getChannelInfoYT} from '/modules/yt.js';

export async function t()
{

const req = await fetch("https://m.youtube.com/youtubei/v1/browse?prettyPrint=false", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
  "content-type": "application/json",
    "sec-ch-ua": "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
    "sec-ch-ua-arch": "\"\"",
    "sec-ch-ua-bitness": "\"\"",
    "sec-ch-ua-full-version": "\"124.0.6327.1\"",
    "sec-ch-ua-full-version-list": "\"Not-A.Brand\";v=\"99.0.0.0\", \"Chromium\";v=\"124.0.6327.1\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-model": "\"M2007J20CI\"",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-ch-ua-platform-version": "\"12.0.0\"",
    "sec-ch-ua-wow64": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "same-origin",
    "sec-fetch-site": "same-origin",
    "x-client-data": "CJXsygE=",
    "x-goog-authuser": "0",
    "x-goog-visitor-id": "Cgt5eVAwcG5iMXpWSSiT2tmvBjIKCgJJThIEGgAgVg%3D%3D",
    "x-origin": "https://m.youtube.com",
    "x-youtube-bootstrap-logged-in": "true",
    "x-youtube-client-name": "2",
    "x-youtube-client-version": "2.20240314.09.00",
   "Referer": "https://m.youtube.com/@XLoss",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"context\":{\"client\":{\"hl\":\"en-GB\",\"gl\":\"IN\",\"remoteHost\":\"2409:4081:1d8a:5f02:6f20:d891:5710:7662\",\"deviceMake\":\"Generic\",\"deviceModel\":\"Android 10.0\",\"visitorData\":\"Cgt5eVAwcG5iMXpWSSiT2tmvBjIKCgJJThIEGgAgVg%3D%3D\",\"userAgent\":\"Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36,gzip(gfe)\",\"clientName\":\"MWEB\",\"clientVersion\":\"2.20240314.09.00\",\"osName\":\"Android\",\"osVersion\":\"10\",\"originalUrl\":\"https://m.youtube.com/@XLoss\",\"playerType\":\"UNIPLAYER\",\"screenPixelDensity\":2,\"platform\":\"MOBILE\",\"clientFormFactor\":\"SMALL_FORM_FACTOR\",\"configInfo\":{\"appInstallData\":\"CJPa2a8GEJCysAUQpPWuBRDr6P4SEKKBsAUQvdKvBRD8hbAFEODKsAUQjeT-EhCMmP8SEKXC_hIQ3oKwBRCikrAFEKiasAUQ3ej-EhCgybAFEPGcsAUQ6Zr_EhDnuq8FEPC_sAUQ3MqwBRCCxrAFEOPKsAUQ0I2wBRDFl_8SELfq_hIQo8mwBRD8sLAFEOevsAUQpoGwBRCI468FEMn3rwUQt--vBRDw5a8FEO3IsAUQvvmvBRDnl7AFEOHyrwUQosWwBRDT4a8FEOrDrwUQg7-wBRC15_4SEIbDsAUQvZmwBRCumP8SELiqsAUQ3sqwBRDZya8FEIfUrwUQ4MewBRCHqK8FEK-P_xIQlpn_EhD0mv8SEIiHsAUQwOCuBRCVlbAFELersAUQvPmvBRCRu7AFEL22rgUQ9quwBRDByrAFEMb1rgUQvoqwBRDiyrAFEM-osAUQocOwBRD0q7AFEJqwsAUQ1YiwBRDOr68FEPOhsAUQzN-uBRDus7AFEJrwrwUQ-qewBRC9w7AFELqa_xIQ95j_EhDBrbAFEL2_sAUQ5fT-EiosQ0FNU0hSVWVvTDJ3RE5Ia0JvalpIc1dxRC1QdHlBc0d5N29HcnYtSURSMEg%3D\"},\"screenDensityFloat\":2.225780963897705,\"userInterfaceTheme\":\"USER_INTERFACE_THEME_LIGHT\",\"timeZone\":\"Asia/Calcutta\",\"browserName\":\"Chrome Mobile\",\"browserVersion\":\"124.0.0.0\",\"acceptHeader\":\"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7\",\"deviceExperimentId\":\"ChxOek0wTnpFM09UYzNNRFUwTmpFNE9EUTROUT09EJPa2a8GGJPa2a8G\",\"screenWidthPoints\":485,\"screenHeightPoints\":910,\"utcOffsetMinutes\":330,\"memoryTotalKbytes\":\"8000000\",\"mainAppWebInfo\":{\"graftUrl\":\"/@XLoss\",\"webDisplayMode\":\"WEB_DISPLAY_MODE_BROWSER\",\"isWebNativeShareAvailable\":true}},\"user\":{\"lockedSafetyMode\":false},\"request\":{\"useSsl\":true,\"internalExperimentFlags\":[],\"consistencyTokenJars\":[]},\"clickTracking\":{\"clickTrackingParams\":\"CEcQoTAYASITCNec4de2-oQDFTwxgwMdCWMBQA==\"},\"adSignalsInfo\":{\"params\":[{\"key\":\"dt\",\"value\":\"1710648597027\"},{\"key\":\"flash\",\"value\":\"0\"},{\"key\":\"frm\",\"value\":\"0\"},{\"key\":\"u_tz\",\"value\":\"330\"},{\"key\":\"u_his\",\"value\":\"3\"},{\"key\":\"u_h\",\"value\":\"873\"},{\"key\":\"u_w\",\"value\":\"393\"},{\"key\":\"u_ah\",\"value\":\"873\"},{\"key\":\"u_aw\",\"value\":\"393\"},{\"key\":\"u_cd\",\"value\":\"24\"},{\"key\":\"bc\",\"value\":\"31\"},{\"key\":\"bih\",\"value\":\"910\"},{\"key\":\"biw\",\"value\":\"485\"},{\"key\":\"brdim\",\"value\":\"0,0,0,0,393,0,393,737,485,910\"},{\"key\":\"vis\",\"value\":\"1\"},{\"key\":\"wgl\",\"value\":\"true\"},{\"key\":\"ca_type\",\"value\":\"image\"}]}},\"browseId\":\"UCUNbognrXqUWzJOtrK8YP2A\"}",
  "method": "POST"
});


const res = await req.json();

// const cId = res.header.c4TabbedHeaderRenderer.channelId;
// const title = res.header.c4TabbedHeaderRenderer.title;
// const username = res.header.c4TabbedHeaderRenderer.navigationEndpoint.browseEndpoint.canonicalBaseUrl;
// const subCount = res.header.c4TabbedHeaderRenderer.subscriberCountText.accessibility.accessibilityData.label;
const videosCountText = res.header.c4TabbedHeaderRenderer.videosCountText.runs

//const title = res.metadata.channelMetadataRenderer.title;
//const description = res.metadata.channelMetadataRenderer.description;

//const externalId = res.metadata.channelMetadataRenderer.externalId;
const keywords =res.metadata.channelMetadataRenderer.keywords;
// const avatar = res.metadata.channelMetadataRenderer.avatar.thumbnails
//const vanityChannelUrl = res.metadata.channelMetadataRenderer.avatar.vanityChannelUrl



var cId ;
var name ;
var username;
var subCount;
var avatar;
var description;


////////////////////////////////////

const channelIdPaths = findAllPropertyPathsEndsWith(res, "channelId");
//console.log(channelIdPaths);
const correctchannelIdPath = 'c4TabbedHeaderRenderer.channelId';
const channelIdmatchingItems = channelIdPaths.filter(item => item.includes(correctchannelIdPath));

if (channelIdmatchingItems.length > 0) { 
  for (const path of channelIdmatchingItems) {
    const value = getValueFromPath(res, path);
    console.log(`res.${path} : ${value}`);
    cId = value;
  }
}


const channelTitlePaths = findAllPropertyPathsEndsWith(res, "title");
//console.log(channelTitlePaths);
const correctchannelTitlePath = 'c4TabbedHeaderRenderer.title';
const channelTitlematchingItems = channelTitlePaths.filter(item => item.includes(correctchannelTitlePath));

if (channelTitlematchingItems.length > 0) { 
  for (const path of channelTitlematchingItems) {
    const value = getValueFromPath(res, path);
    console.log(`res.${path} : ${value}`);
    name = value;
  }
}


const subscriberCountPaths = findAllPropertyPathsEndsWith(res, "accessibilityData.label");
//console.log(subscriberCountPaths);
const correctSubscriberCountPath = 'subscriberCountText';
const subscriberCountematchingItems = subscriberCountPaths.filter(item => item.includes(correctSubscriberCountPath));

if (subscriberCountematchingItems.length > 0) { 
  for (const path of subscriberCountematchingItems) {
    const value = getValueFromPath(res, path);
    console.log(`res.${path} : ${value}`);
    subCount = value;
  }
}


const handlePaths = findAllPropertyPathsEndsWith(res, 'browseEndpoint.canonicalBaseUrl');
//console.log(handlePaths);
const correctHandlePath = 'header.c4TabbedHeaderRenderer.navigationEndpoint';
const handlematchingItems = handlePaths.filter(item => item.includes(correctHandlePath));

if (handlematchingItems.length > 0) { 
  for (const path of handlematchingItems) {
    const value = getValueFromPath(res, path);
    console.log(`res.${path}: ${value}`);
    username = value;
  }
} 


const avatarPaths = findAllPropertyPathsEndsWith(res, 'avatar.thumbnails');
console.log(avatarPaths);
const correctavatarPath = 'header.c4TabbedHeaderRenderer';
const avatarmatchingItems = avatarPaths.filter(item => item.includes(correctavatarPath));

if (avatarmatchingItems.length > 0) { 
  for (const path of avatarmatchingItems) {
    const value = getValueFromPath(res, path);
    console.log(`res.${path}: ${value}`);
    avatar = value;
  }
} 


const descriptionPaths = findAllPropertyPathsEndsWith(res, 'description');
//console.log(descriptionPaths);
const correctdescriptionPath = 'metadata.channelMetadataRenderer';
const descriptionmatchingItems = descriptionPaths.filter(item => item.includes(correctdescriptionPath));

if (descriptionmatchingItems.length > 0) { 
  for (const path of descriptionmatchingItems) {
    const value = getValueFromPath(res, path);
    console.log(`res.${path}: ${value}`);
    description = value;
  }
} 






const Obj = {

   cId : cId,
   name : name,
   username: username.replaceAll("/@", ""),
   subCount : subCount.replaceAll(" subscribers", "")
  }
  
  console.log(Obj);
  



}






function getValueFromPath(obj, path) {
  const keys = path.split('.');
  let value = obj;
  for (const key of keys) {
    value = value[key];
  }
  return value;
}


function findAllPropertyPathsEndsWith(obj, targetProperty, currentPath = '') {
  let paths = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newPath = currentPath ? `${currentPath}.${key}` : key;
      if (newPath.endsWith(targetProperty)) { // Check if the path ends with the target property
        paths.push(newPath);
      } else if (typeof obj[key] === 'object') {
        const results = findAllPropertyPathsEndsWith(obj[key], targetProperty, newPath); // Corrected function name
        if (results.length > 0) {
          paths = paths.concat(results);
        }
      }
    }
  }
  return paths;
}



// Function to check for a specific property and return all its paths
function findAllPropertyPaths(obj, targetProperty, currentPath = '') {
  let paths = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newPath = currentPath ? `${currentPath}.${key}` : key;
      if (key === targetProperty) {
        paths.push(newPath);
      } else if (typeof obj[key] === 'object') {
        const results = findAllPropertyPaths(obj[key], targetProperty, newPath);
        if (results.length > 0) {
          paths = paths.concat(results);
        }
      }
    }
  }
  return paths;
}




