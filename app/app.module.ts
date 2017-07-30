
// Import the core angular services.
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

// Import the application components and services.
import { AppComponent } from "./app.component";
import { DateTimeComponent } from "./date-time.component";
import { IncidentService } from "./incident.service";
import { QuoteService } from "./quote.service";
import { SlackSerializer } from "./slack-serializer";
import { TimelineDatePipe } from "./timeline-date.pipe";
import { TimelineTimePipe } from "./timeline-time.pipe";

@NgModule({
	bootstrap: [ AppComponent ],
	imports: [ BrowserModule, FormsModule ],
	declarations: [ 
		AppComponent,
		DateTimeComponent,
		TimelineDatePipe,
		TimelineTimePipe
	],
	providers: [
		IncidentService,
		QuoteService,
		SlackSerializer
	]
})
export class AppModule {
	// ...
}
