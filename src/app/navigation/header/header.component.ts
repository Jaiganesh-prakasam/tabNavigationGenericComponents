import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"]
})
export class HeaderComponent implements OnInit {
  @Output() public openModal = new EventEmitter();
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
  public onToggleSidenav = () => {
    this.openModal.emit();
  };
}
