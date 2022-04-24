export const shortenAddress = (address: string) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`.toUpperCase().replace('X','x');
