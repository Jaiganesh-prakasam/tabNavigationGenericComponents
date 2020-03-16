import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  AfterViewInit
} from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"]
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @Output() public openModal = new EventEmitter();
  selectedPage = "Migration strategy";
  pageLink = "migrationStrategy";
  menuItems = [
    {
      src: "../../../assets/logo/instantParameter.png",
      name: "Inst Parameter",
      pageLink: "instParameter"
    },
    {
      src: "../../../assets/logo/alerts.png",
      name: "Alerts",
      pageLink: "Alerts"
    },
    {
      src: "../../../assets/logo/loadSurvey.png",
      name: "Load survey",
      pageLink: "LoadSurvey"
    },
    {
      src: "../../../assets/logo/dailyProfile.png",
      name: "Daily profile",
      pageLink: "DailyProfile"
    },
    {
      src: "../../../assets/logo/migrationStrategy.png",
      name: "Migration strategy",
      pageLink: "migrationStrategy"
    },
    {
      src: "../../../assets/logo/analytics.png",
      name: "Analytics",
      pageLink: "Analytics"
    }
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    // to highlight the selected page in the initial load
    this.addPageBorderBottom(this.selectedPage, this.pageLink);
  }

  // to Highlight the selected Page
  addPageBorderBottom(selectedPage, pageLink) {
    let element = document.getElementById(selectedPage);
    element.style.borderBottom = "solid 5px";
    // to load the necessary component
    this.router.navigateByUrl("/page/" + pageLink);
  }
  // to remove highlighting
  removePageBorderBottom(selectedPage) {
    let element = document.getElementById(selectedPage);
    element.style.borderBottom = "";
  }
  public onToggleSidenav = () => {
    this.openModal.emit();
  };

  differentPageSelected(selectedPage, pageLink) {
    // won't trigger if the selected page is clicked
    if (selectedPage !== this.selectedPage) {
      this.removePageBorderBottom(this.selectedPage);
      this.selectedPage = selectedPage;
      this.addPageBorderBottom(this.selectedPage, pageLink);
    }
  }
}
