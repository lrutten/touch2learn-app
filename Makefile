all: help

help:
	echo hulp

add-android:
	ionic platform android

add-cordova-whitelist:
	cordova plugin add cordova-plugin-whitelist


serve:
	ionic serve

build:
	ionic build android

emulator:
	emulator64-x86 -avd avd-nexus4 -qemu -m 512 -enable-kvm

install:
	adb install ./platforms/android/build/outputs/apk/android-debug.apk

install-release:
	adb install Touch2Learn.apk

uninstall:
	adb uninstall be.touch2learn.app

install-debug:
	adb install ./platforms/android/build/outputs/apk/android-debug-unaligned.apk


logcat:
	adb logcat


# Vanaf hier staat alles voor de publicatie

all-android: build-release sign zipalign uninstall install-release

build-release:
	cordova build --release android

sign:
	jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/.keystore/keys.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk android-keys

zipalign:
	rm -vf Touch2Learn.apk
	/usr/local/android-sdk/build-tools/22.0.1/zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk Touch2Learn.apk


clean:
	find . -name "*.apk" | xargs rm -v

