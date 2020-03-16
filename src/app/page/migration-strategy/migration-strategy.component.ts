import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-migration-strategy",
  templateUrl: "./migration-strategy.component.html",
  styleUrls: ["./migration-strategy.component.sass"]
})
export class MigrationStrategyComponent implements OnInit {
  tableData = new Set();
  // tableData= [
  //
  //   {}
  // ]
  constructor() {
    this.tableData
      .add({ key: "Manufacturer name", value: "MANUFACTURER1" })
      .add({ key: "Transformer location/name", value: "LOCATION272" })
      .add({ key: "Transformer Serial number", value: "SNO1000271" })
      .add({ key: "Meter number", value: "DBG1000271" })
      .add({ key: "Section", value: "section" })
      .add({ key: "Sub Division", value: "subdivision77" })
      .add({ key: "Division", value: "division89" })
      .add({ key: "Circle", value: "circle92" })
      .add({ key: "Region", value: "region61" })
      .add({ key: "Latitude", value: "13.087586691730579" })
      .add({ key: "Longitude", value: "80.27846012172182" });
  }

  ngOnInit(): void {}
}
