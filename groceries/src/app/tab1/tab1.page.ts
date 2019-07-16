import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = 'Grocery List';
  items = [
    {
      name: 'Milk',
      quantity: '2 Gallons'
    },
    {
      name: 'Bread',
      quantity: '1 loaf'
    },
    {
      name: 'Bananas',
      quantity: '3 lbs'
    }
    ];
  constructor(public toastController: ToastController, public alertController: AlertController) {}

  async removeItem(item, index) {
    console.log('Removing Item - ', index);
    const toast = await this.toastController.create({
      message: 'Removing Item – ' + index + '...',
      duration: 3000
    });
    toast.present();
    this.items.splice(index, 1);
  }

  async addItem() {
    console.log('Adding item');
    this.addItemAlertPrompt();
  }
  async addItemAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Add to List',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          type: 'text',
          placeholder: 'Quantity 1, 2, 5lbs'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: item => {
            console.log('Confirm Save');
            this.items.push(item);
          }
        }
      ]
    });

    await alert.present();
  }
}
