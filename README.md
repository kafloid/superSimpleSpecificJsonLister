# Listar contenido de archivo JSON en HTML

Este es un ejemplo de cómo leer un archivo JSON y mostrar su contenido en formato de lista HTML utilizando JavaScript.

## Uso

1. Seleccione el archivo JSON haciendo clic en el botón "Seleccionar archivo".
2. Haga clic en el botón "Cargar contenido".
3. El contenido del archivo JSON se mostrará en una lista en la página.

## Formato del archivo JSON

El archivo JSON debe tener el siguiente formato:

```
{
  "nombre": "Nombre",
  "edad": "Edad",
  "telefonos": [
    {
      "tipo": "Tipo teléfono",
      "numero": "Numero telefono"
    }
  ],
  "email": "Email"
}
```

El archivo puede tener múltiples entradas, cada una con este formato.

## Limitaciones

Este ejemplo no admite archivos JSON grandes. Además, solo se admite un archivo JSON a la vez.

## Contribuir

Si desea contribuir a este ejemplo, abra un problema o envíe una solicitud de extracción.

## Licencia

Este ejemplo está disponible bajo la Licencia MIT.