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
	mv -v ./platforms/android/build/outputs/apk/android-debug.apk ./platforms/android/build/outputs/apk/touch2learn-debug.apk

emulator:
	emulator64-x86 -avd avd-nexus4 -qemu -m 512 -enable-kvm

install-debug:
	adb install ./platforms/android/build/outputs/apk/touch2learn-debug.apk

install-debug-eaict:
	rsync -rav ./platforms/android/build/outputs/apk/touch2learn-debug.apk /eaict/public_html/touch2learn/

install-release:
	adb install Touch2Learn.apk


install-release-eaict:
	rsync -rav Touch2Learn.apk /eaict/public_html/touch2learn/

uninstall:
	adb uninstall be.touch2learn.app

logcat:
	adb logcat


# Vanaf hier staat alles voor de publicatie

all-android: build-release sign zipalign uninstall install-release

build-release:
	cordova build --release android

sign:
	jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/.keystore/keys.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk android-keys

#zipalign:
#	rm -vf Touch2Learn.apk
#	/usr/local/android-sdk/build-tools/22.0.1/zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk Touch2Learn.apk

zipalign:
	rm -vf Touch2Learn.apk
	zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk Touch2Learn.apk


clean:
	find . -name "*.apk" | xargs rm -v

