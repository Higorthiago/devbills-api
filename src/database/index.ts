import mongoose from "mongoose";

export async function setupMongo(): Promise<void> {
    try {
   if (mongoose.connection.readyState === 1) {
        return;
   }

       console.log('🎲 connecting to DB...');
        await mongoose.connect(process.env.MONGO_URL as string);
       console.log('I DB conncted!')
    } catch {
       throw new Error('❌ DB not connected')
    }
}