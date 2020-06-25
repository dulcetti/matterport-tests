export interface IMatterportShowcase {
  App: object;
  Camera: ICamera;
  Conversion: object;
  Floor: object;
  Label: object;
  Mattertag: IMattertag;
  Measurements: object;
  Mode: object;
  Model: IModel;
  Pointer: object;
  Renderer: object;
  Settings: object;
  Stat: object;
  Sweep: object;
  Tour: object;
  off: object;
  on: object;
}

interface ICamera {
  moveInDirection: any;
  rotate: any;
}

interface IMattertag {
  add: any;
}

interface IModel {
  getData: any;
}
