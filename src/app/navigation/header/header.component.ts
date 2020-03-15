import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"]
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @Output() public openModal = new EventEmitter();
  selectedPage = "Migration strategy";
  menuItems = [
    {
      src: "../../../assets/logo/instantParameter.png",
      name: "Inst Parameter",
      link: ""
    },
    {
      src: "../../../assets/logo/alerts.png",
      name: "Alerts",
      link: ""
    },
    {
      src: "../../../assets/logo/loadSurvey.png",
      name: "Load survey",
      link: ""
    },
    {
      src: "../../../assets/logo/dailyProfile.png",
      name: "Daily profile",
      link: ""
    },
    {
      src: "../../../assets/logo/migrationStrategy.png",
      name: "Migration strategy",
      link: ""
    },
    {
      src: "../../../assets/logo/analytics.png",
      name: "Analytics",
      link: ""
    }
  ];
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    // to highlight the selected page in the initial load
    this.addPageBorderBottom(this.selectedPage);
  }

  // to Highlight the selected Page
  addPageBorderBottom(selectedPage) {
    let element = document.getElementById(selectedPage);
    element.style.borderBottom = "solid 5px";
  }
  // to remove highlighting
  removePageBorderBottom(selectedPage) {
    let element = document.getElementById(selectedPage);
    element.style.borderBottom = "";
  }
  public onToggleSidenav = () => {
    this.openModal.emit();
  };

  differentPageSelected(selectedPage) {
    // won't trigger if the selected page is clicked
    if (selectedPage !== this.selectedPage) {
      this.removePageBorderBottom(this.selectedPage);
      this.selectedPage = selectedPage;
      this.addPageBorderBottom(this.selectedPage);
    }
  }
}
