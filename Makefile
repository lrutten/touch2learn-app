all: help

help:
	echo hulp

serve:
	ionic serve

emulator:
	emulator64-x86 -avd avd-nexus4 -qemu -m 512 -enable-kvm

install:
	adb install ./platforms/android/build/outputs/apk/android-debug.apk

install-debug:
	adb install ./platforms/android/build/outputs/apk/android-debug-unaligned.apk

