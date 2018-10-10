# expo-get-initial-url-test

I have the following `intentFilters` configured in `app.json`.

```
"intentFilters": [
  {
    "action": "VIEW",
    "data": {
      "scheme": "https",
      "host": "www.test.com"
    },
    "category": [
      "BROWSABLE",
      "DEFAULT"
    ]
  }
]
```

When I open `https://www.test.com` it asks to open my app correctly. The problem is that `Linking.getInitialURL()` doesn't return the correct url.

## How to reproduce

### 1. Build an android apk

```
yarn install
expo build:android
```

### 2. Install the apk

### 3. Open `https://www.test.com` with `expo-get-initial-url-test` closed:

```
adb shell am start -a android.intent.action.VIEW -d https://www.test.com
```

It will print something like: `https://expo.io:443/@user/expo-get-initial-url-test`

### 4. Leave the app opened, go back to home screen and open the URL again:

```
adb shell am start -a android.intent.action.VIEW -d https://www.test.com
```

Now, the correct link (`https://www.test.com`) will be received with the `url` event.

## Expected result

Both `getInitialURL` and `url` event should receive `https://www.test.com`.
