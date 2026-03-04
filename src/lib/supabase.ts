import { createClient } from '@supabase/supabase-js';

// 这些环境变量需要在 Vercel 的后台配置
// 在本地开发时，如果没有 .env 文件，这个客户端将无法连接真实数据库
// 但我们的代码会做降级处理，使用 Mock 数据
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 类型定义：确保数据库返回的数据类型安全
export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string;
          name: string;
          category: string;
          price: string;
          rating: number;
          image: string;
          desc: string;
          created_at: string;
        };
      };
      contacts: {
        Row: {
          id: string;
          name: string;
          email: string;
          message: string;
          created_at: string;
        };
      };
    };
  };
}
