```js
  // Request camera / photo album image picker
  if (Capacitor.getPlatform() != 'web') await Camera.requestPermissions();

  // The image to be sent
  const image = await Camera.getPhoto({
    quality: 100,
    source: CameraSource.Prompt,
    width: 600,
    resultType: CameraResultType.DataUrl
  });

  const loading = await this.loadingCtrl.create({
    message: "Trying to predict trash type..."
  });
  loading.present();

  // Sent the image to be classified
  this.trashifierService.predict(image).subscribe(async res => {
    this.predictionResult = res.class;
    loading.dismiss();
    this.openModal();
  })

```

```js
    try {
      // Request camera / photo album image picker
      if (Capacitor.getPlatform() != 'web') await Camera.requestPermissions();

      // The image to be sent
      const image = await Camera.getPhoto({
        quality: 100,
        source: CameraSource.Prompt,
        width: 600,
        resultType: CameraResultType.DataUrl
      });
      // console.log('image: ', image);

      // Show image to user
      // this.image = image.dataUrl;

      // Present loading
      const loading = await this.loadingCtrl.create({
        message: "Trying to predict trash type..."
      });
      loading.present();

      // Convert image to blob
      // const blob = this.dataURLtoBlob(image.dataUrl);

      // Sent the image to be classified
      this.trashifierService.predict(image).subscribe(async res => {
        this.predictionResult = res.class;
        console.log(res);
        console.log(this.predictionResult)
        loading.dismiss();
        this.openModal();
      })
    } catch (e) {
      this.errorMessage = e;
    }

```

```js
      this.trashifierService.predict(imageData).subscribe(async res => {
        this.predictionResult = res.class;
        console.log(res);
        console.log(this.predictionResult)
        loading.dismiss();
        this.openModal();
      })
```