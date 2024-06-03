export const POINT_ONE = '100000000000000000000000';

export class PostedMessage {
  premium: boolean;
  sender: string;
  text: string;

  constructor({ premium, sender, text }: { premium: boolean; sender: string; text: string }) {
    this.premium = premium;
    this.sender = sender;
    this.text = text;
  }
}

export class Cliente {
  nombre: string;
  direccion: string;
  telefono: string;

  constructor({ nombre, direccion, telefono }: { nombre: string; direccion: string; telefono: string }) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
}

export class Proveedor {
  nombre: string;
  telefono: string;
  correo: string;
  direccion: string;

  constructor({ nombre, telefono, correo, direccion }: { nombre: string; telefono: string; correo: string; direccion: string }) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.correo = correo;
    this.direccion = direccion;
  }
}

export class Producto {
  nombre: string;
  descripcion: string;
  precio: number;

  constructor({ nombre, descripcion, precio }: { nombre: string; descripcion: string; precio: number }) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}

export class Recompensa {
  idRecompensa: number;
  nombre: string;
  cantidad: number;

  constructor({ idRecompensa, nombre, cantidad }: { idRecompensa: number; nombre: string; cantidad: number }) {
    this.idRecompensa = idRecompensa;
    this.nombre = nombre;
    this.cantidad = cantidad;
  }
}
