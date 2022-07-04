interface Props {
  image?: string;
  width?: number;
  height?: number;
  base64?: string;
  className?: string;
}

/**Renderiza una imagen en el DOM pasandole el nombre de la imagen ubicado en la carpeta imagenes en el public folder o pasandole un base 64 string */
export function Image(props: Props) {
  return (
    <img
      width={props.width}
      height={props.height}
      className={props.className}
      alt={props.base64 ? "base64" : props.image}
      src={
        props.base64
          ? "data:image/png;base64," + props.base64
          : process.env.PUBLIC_URL + "/images/" + props.image
      }
    />
  );
}
