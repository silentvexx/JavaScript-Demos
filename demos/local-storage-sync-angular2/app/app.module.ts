
// Import the core angular services.
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// Import the application components and services.
import { AppComponent } from "./app.component";
import { FriendService } from "./friend.service";
import { LocalStorageService } from "./local-storage.service";

@NgModule({
	bootstrap: [ AppComponent ],
	imports: [ BrowserModule ],
	providers: [ FriendService, LocalStorageService ],
	declarations: [ AppComponent ]
})
export class AppModule {
	// ...
}
