export default function BorderLines({ className = "", primaryColor = "primary", secondaryColor = "secondary" }) {
  return (
    <>
      <div className={`absolute -left-4 top-1/3 bottom-1/3 w-1 bg-gradient-to-b from-${primaryColor}/0 via-${primaryColor}/30 to-${primaryColor}/0 rounded-full ${className}`}></div>
      <div className={`absolute -right-4 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-${secondaryColor}/0 via-${secondaryColor}/30 to-${secondaryColor}/0 rounded-full ${className}`}></div>
    </>
  );
} 