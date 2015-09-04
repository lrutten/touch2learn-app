all: help

help:
	echo hulp

serve:
	ionic serve

build:
	ionic build android

emulator:
	emulator64-x86 -avd avd-nexus4 -qemu -m 512 -enable-kvm

install:
	adb install ./platforms/android/build/outputs/apk/android-debug.apk

uninstall:
	adb uninstall be.touch2learn.app

install-debug:
	adb install ./platforms/android/build/outputs/apk/android-debug-unaligned.apk


logcat:
	adb logcat

