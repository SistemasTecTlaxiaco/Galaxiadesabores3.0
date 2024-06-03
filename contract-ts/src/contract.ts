import { NearBindgen, near, call, view, Vector } from 'near-sdk-js';
import { POINT_ONE, PostedMessage, Cliente, Proveedor, Producto, Recompensa } from './model';

@NearBindgen({})
class GuestBook {
  messages: Vector<PostedMessage> = new Vector<PostedMessage>("v-uid");
  clientes: Vector<Cliente> = new Vector<Cliente>("c-uid");
  proveedores: Vector<Proveedor> = new Vector<Proveedor>("p-uid");
  productos: Vector<Producto> = new Vector<Producto>("pd-uid");
  recompensas: Vector<Recompensa> = new Vector<Recompensa>("r-uid");

  @call({ payableFunction: true })
  // Public - Adds a new message.
  add_message({ text }: { text: string }) {
    // If the user attaches more than 0.1N the message is premium
    const premium = near.attachedDeposit() >= BigInt(POINT_ONE);
    const sender = near.predecessorAccountId();

    // Create instance of PostedMessage using the constructor
    const message = new PostedMessage({ premium, sender, text });
    this.messages.push(message);
  }

  @call({})
  // Public - Adds a new client.
  add_client({ nombre, direccion, telefono }: { nombre: string; direccion: string; telefono: string }) {
    const client = new Cliente({ nombre, direccion, telefono });
    this.clientes.push(client);
  }

  @call({})
  // Public - Adds a new provider.
  add_provider({ nombre, telefono, correo, direccion }: { nombre: string; telefono: string; correo: string; direccion: string }) {
    const provider = new Proveedor({ nombre, telefono, correo, direccion });
    this.proveedores.push(provider);
  }

  @call({})
  // Public - Adds a new product.
  add_product({ nombre, descripcion, precio }: { nombre: string; descripcion: string; precio: number }) {
    const product = new Producto({ nombre, descripcion, precio });
    this.productos.push(product);
  }

  @call({})
  // Public - Adds a new reward.
  add_reward({ idRecompensa, nombre, cantidad }: { idRecompensa: number; nombre: string; cantidad: number }) {
    const reward = new Recompensa({ idRecompensa, nombre, cantidad });
    this.recompensas.push(reward);
  }

  @view({})
  // Returns an array of messages.
  get_messages({ from_index = 0, limit = 10 }: { from_index: number, limit: number }): PostedMessage[] {
    return this.messages.toArray().slice(from_index, from_index + limit);
  }

  @view({})
  // Returns an array of clients.
  get_clients({ from_index = 0, limit = 10 }: { from_index: number, limit: number }): Cliente[] {
    return this.clientes.toArray().slice(from_index, from_index + limit);
  }

  @view({})
  // Returns an array of providers.
  get_providers({ from_index = 0, limit = 10 }: { from_index: number, limit: number }): Proveedor[] {
    return this.proveedores.toArray().slice(from_index, from_index + limit);
  }

  @view({})
  // Returns an array of products.
  get_products({ from_index = 0, limit = 10 }: { from_index: number, limit: number }): Producto[] {
    return this.productos.toArray().slice(from_index, from_index + limit);
  }

  @view({})
  // Returns an array of rewards.
  get_rewards({ from_index = 0, limit = 10 }: { from_index: number, limit: number }): Recompensa[] {
    return this.recompensas.toArray().slice(from_index, from_index + limit);
  }

  @view({})
  total_messages(): number { return this.messages.length }

  @view({})
  total_clients(): number { return this.clientes.length }

  @view({})
  total_providers(): number { return this.proveedores.length }

  @view({})
  total_products(): number { return this.productos.length }

  @view({})
  total_rewards(): number { return this.recompensas.length }
}
