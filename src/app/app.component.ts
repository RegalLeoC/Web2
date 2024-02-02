import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "Victor";
  lastName = "Garcia";
  isLogging = false;
  userName = "Vic234"

  saludar(){
    console.log("Hola", this.name, this.lastName)
  }

  login(){
    this.isLogging = !this.isLogging;
  }




}
