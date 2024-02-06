export class Cliente {
    public cli_codigo?: number;
    public cli_cedula?: string;
    public cli_nombre?: string;
    public cli_apellido?: string;
    public cli_direccion?: string;
    public cli_telefono?: string;
    public cli_estado?: string;
    public cli_usuario?: string;
    public cli_contrasena?: string;
      
    // Otros métodos y propiedades...
  
    public getContrasena(): string | undefined {
      return this.cli_contrasena;
    }
  
    // Otros métodos y propiedades...
  }
  