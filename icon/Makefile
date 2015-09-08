ICONS = res/icon/drawable-ldpi-icon.png \
        res/icon/drawable-mdpi-icon.png \
        res/icon/drawable-hdpi-icon.png \
        res/icon/drawable-xhdpi-icon.png \
        res/icon/drawable-xxhdpi-icon.png \
        res/icon/drawable-xxxhdpi-icon.png

SCREENSPORT = res/splash/drawable-port-ldpi-screen.png \
              res/splash/drawable-port-mdpi-screen.png \
              res/splash/drawable-port-hdpi-screen.png \
              res/splash/drawable-port-xhdpi-screen.png \
              res/splash/drawable-port-xxhdpi-screen.png \
              res/splash/drawable-port-xxxhdpi-screen.png

SCREENSLAND = res/splash/drawable-land-ldpi-screen.png \
              res/splash/drawable-land-mdpi-screen.png \
              res/splash/drawable-land-hdpi-screen.png \
              res/splash/drawable-land-xhdpi-screen.png \
              res/splash/drawable-land-xxhdpi-screen.png \
              res/splash/drawable-land-xxxhdpi-screen.png


all: $(ICONS) $(SCREENSPORT) $(SCREENSLAND)

res/icon/drawable-ldpi-icon.png: icon.svg
	inkscape -z -w 36 -h 36  --export-png=res/icon/drawable-ldpi-icon.png icon.svg

res/icon/drawable-mdpi-icon.png: icon.svg
	inkscape -z -w 48 -h 48  --export-png=res/icon/drawable-mdpi-icon.png icon.svg

res/icon/drawable-hdpi-icon.png: icon.svg
	inkscape -z -w 72 -h 72  --export-png=res/icon/drawable-hdpi-icon.png icon.svg

res/icon/drawable-xhdpi-icon.png: icon.svg
	inkscape -z -w 96 -h 96  --export-png=res/icon/drawable-xhdpi-icon.png icon.svg

res/icon/drawable-xxhdpi-icon.png: icon.svg
	inkscape -z -w 144 -h 144  --export-png=res/icon/drawable-xxhdpi-icon.png icon.svg

res/icon/drawable-xxxhdpi-icon.png: icon.svg
	inkscape -z -w 192 -h 192  --export-png=res/icon/drawable-xxxhdpi-icon.png icon.svg



res/splash/drawable-port-ldpi-screen.png: screen.svg
	inkscape -z -w 200 -h 320  --export-png=res/splash/drawable-port-ldpi-screen.png screen.svg

res/splash/drawable-port-mdpi-screen.png: screen.svg
	inkscape -z -w 320 -h 480  --export-png=res/splash/drawable-port-mdpi-screen.png screen.svg

res/splash/drawable-port-hdpi-screen.png: screen.svg
	inkscape -z -w 480 -h 800  --export-png=res/splash/drawable-port-hdpi-screen.png screen.svg

res/splash/drawable-port-xhdpi-screen.png: screen.svg
	inkscape -z -w 720 -h 1280  --export-png=res/splash/drawable-port-xhdpi-screen.png screen.svg

res/splash/drawable-port-xxhdpi-screen.png: screen.svg
	inkscape -z -w 960 -h 1600  --export-png=res/splash/drawable-port-xxhdpi-screen.png screen.svg

res/splash/drawable-port-xxxhdpi-screen.png: screen.svg
	inkscape -z -w 1280 -h 1920  --export-png=res/splash/drawable-port-xxxhdpi-screen.png screen.svg




res/splash/drawable-land-ldpi-screen.png: screen-land.svg
	inkscape -z -w 320 -h 200  --export-png=res/splash/drawable-land-ldpi-screen.png screen-land.svg

res/splash/drawable-land-mdpi-screen.png: screen-land.svg
	inkscape -z -w 480 -h 320  --export-png=res/splash/drawable-land-mdpi-screen.png screen-land.svg

res/splash/drawable-land-hdpi-screen.png: screen-land.svg
	inkscape -z -w 800 -h 480  --export-png=res/splash/drawable-land-hdpi-screen.png screen-land.svg

res/splash/drawable-land-xhdpi-screen.png: screen-land.svg
	inkscape -z -w 1280 -h 720  --export-png=res/splash/drawable-land-xhdpi-screen.png screen-land.svg

res/splash/drawable-land-xxhdpi-screen.png: screen-land.svg
	inkscape -z -w 1600 -h 960  --export-png=res/splash/drawable-land-xxhdpi-screen.png screen-land.svg

res/splash/drawable-land-xxxhdpi-screen.png: screen-land.svg
	inkscape -z -w 1920 -h 1280  --export-png=res/splash/drawable-land-xxxhdpi-screen.png screen-land.svg


copy:
	rsync -rav res/ ../resources/android/

clean:
	find res -name "*.png"|xargs rm -v

