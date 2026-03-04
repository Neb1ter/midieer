# Vercel Optimization for Mainland China

To ensure fast access and avoid DNS pollution in Mainland China, please follow these steps:

1.  **Custom Domain**: Do not use the default `*.vercel.app` domain as it is often blocked or slow. Purchase a custom domain (e.g., `midieer.com`).

2.  **CNAME Record**:
    *   In your domain registrar (e.g., AliCloud, Tencent Cloud, GoDaddy), add a CNAME record for your domain (e.g., `www`).
    *   Point it to: **`cname-china.vercel-dns.com`**
    *   This special CNAME is optimized for China access and routes traffic through faster nodes.

3.  **Vercel Configuration**:
    *   In Vercel Dashboard -> Settings -> Domains, add your custom domain.
    *   Vercel will verify the CNAME record.

4.  **Regions**:
    *   The `vercel.json` included in this project attempts to set the region to `hkg1` (Hong Kong), which is optimal for China access.

