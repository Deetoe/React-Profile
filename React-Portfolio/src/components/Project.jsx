export default function Project({ title, image, liveLink, repoLink }) {
  return (
    <div className="rounded shadow-lg p-4">
      <img 
        src={image} 
        alt={title} 
        className="mb-2 w-full h-64 object-cover rounded"  
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="flex gap-4 mt-2">
        <a href={liveLink} target="_blank" rel="noreferrer">Live</a>
        <a href={repoLink} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  );
}
