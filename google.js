let GoogleAuth; // Google Auth object.
const initClient = async () => {
    await gapi.client.init({
        'clientId': '258563955545-o3qj8nebt6mar2qnbrkortvb2beocgim.apps.googleusercontent.com',
        'apiKey': 't9uE4Txc1PfKnxR0LNLtVzYQ',
        'scope': 'https://mail.google.com/',
        'discoveryDocs': ['https://gmail.googleapis.com/$discovery/rest?version=v1']
    });

    GoogleAuth = gapi.auth2.getAuthInstance();
    GoogleAuth.isSignedIn.listen(updateSigninStatus);

}
const onclickButton = async () => {
    console.log('init google gapi');
    gapi.load('client:auth2', initClient);
}
const onclicktest = () => {
    console.log('log in');
    GoogleAuth.signIn();
}