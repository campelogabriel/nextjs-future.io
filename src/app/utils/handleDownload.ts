function handleDownload() {
  const imageUrl = "/photo.jpg";
  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = "imagem_gerada.jpg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default handleDownload;
