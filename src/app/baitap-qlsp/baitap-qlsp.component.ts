import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-baitap-qlsp",
  templateUrl: "./baitap-qlsp.component.html",
  styleUrls: ["./baitap-qlsp.component.scss"]
})
export class BaitapQlspComponent implements OnInit {
  arrSanPham: any = [
    { MaSP: 1, TenSP: "Sony XZ", Gia: 1000 },
    { MaSP: 2, TenSP: "Sony XZ2", Gia: 1000 },
    { MaSP: 3, TenSP: "HTC U Ultra", Gia: 1000 },
    { MaSP: 4, TenSP: "HTC U12 Plus", Gia: 1000 },
    { MaSP: 5, TenSP: "Iphone XS MAX", Gia: 1000 },
    { MaSP: 6, TenSP: "Iphone XR", Gia: 1000 },
    { MaSP: 7, TenSP: "Xiaomi Mi Note 3", Gia: 9900 },
    { MaSP: 8, TenSP: "Xiaomi Mi 8", Gia: 1000 },
    { MaSP: 9, TenSP: "Galaxy Note 9", Gia: 1000 },
    { MaSP: 10, TenSP: "Galaxy S9 Plus", Gia: 1000 },
    { MaSP: 11, TenSP: "Nokia X9", Gia: 1000 }
  ];
  p: number = 1;
  collection: any[] = this.arrSanPham;

  ngOnInit() {}
  themSanPham(_maSP, _tenSP, _giaSP) {
    const sanPham = {
      MaSP: _maSP,
      TenSP: _tenSP,
      Gia: _giaSP
    };
    this.arrSanPham.push(sanPham);
  }
  xoaSanPham(index) {
    this.arrSanPham.splice(index, 1);
  }
}
