export class Cliente {
    private cli_codigo?: number;
    private cli_cedula?: string;
    private cli_nombre?: string;
    private cli_apellido?: string;
    private cli_direccion?: string;
    private cli_telefono?: string;
    private cli_estado?: string;
    private cli_usuario?: string;
    public cli_contrasena?: string;
      
    // Otros métodos y propiedades...
  
    public getContrasena(): string | undefined {
      return this.cli_contrasena;
    }
  
    // Otros métodos y propiedades...
  }
  