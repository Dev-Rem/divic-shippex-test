# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

Building an APK Using EAS Build
Steps to Build an APK
Set Up Your Expo Project

Make sure your Expo project is set up and you have installed all dependencies.

```bash
npm install
Install EAS CLI
```

If you haven't already, install the EAS CLI globally on your machine.

```bash
npm install -g eas-cli
```

Configure Your Project for EAS

Run the following command to configure your project for EAS builds.

```bash
eas build:configure
```

This command will guide you through setting up your eas.json file, which contains the configuration for your builds.

Create a Build Profile

In your project root, you'll have an eas.json file. Ensure you have a build profile for Android. Your eas.json might look like this:

```json
{
  "build": {
    "production": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

Login to Expo

Ensure you are logged in to your Expo account.

```bash
eas login
```
Start the Build

Initiate the build process. You can specify the profile you want to use (e.g., production).

```bash
eas build --platform android --profile production
```
Handle Credentials

EAS CLI will guide you through setting up the credentials for your build. You can let EAS handle it for you, or you can provide your own keystore if you have one.

Monitor the Build

Once the build process starts, you can monitor the progress in your terminal. You can also view the build progress on the Expo dashboard.

Download the APK

After the build completes, you'll receive a URL to download the APK. You can also find the APK on the Expo dashboard under your project.

Test the APK

Download the APK to your Android device or emulator and test it to ensure everything is working as expected.

Additional Configuration (Optional)
Using Environment Variables
You can use environment variables in your eas.json to manage different build configurations. Here's an example:

```json
{
  "build": {
    "production": {
      "android": {
        "buildType": "apk",
        "env": {
          "API_URL": "https://api.production.example.com"
        }
      }
    }
  }
}
```
Customizing Build Scripts
You can add custom scripts to run before or after the build by specifying them in your eas.json.

```json

{
  "build": {
    "production": {
      "android": {
        "buildType": "apk",
        "hooks": {
          "preBuild": "echo Running pre-build script...",
          "postBuild": "echo Running post-build script..."
        }
      }
    }
  }
}
```
References and Further Reading
Expo EAS Build Documentation
Expo CLI Reference
EAS Build Profiles
