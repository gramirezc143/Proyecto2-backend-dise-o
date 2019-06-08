import { Schema, Document, model } from 'mongoose';


const postSchema = new Schema({

    created: {
        type: Date
    },
    titulo: {
        type: String
    },
    mensaje: {
        type: String
    },
    imgs: [{
        type: String
    }],
    coords: {
        type: String   // -13.313123, 12.3123123  mmm
    },
    usuario:{ 
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [ true, 'Debe de existir una referencia a un usuario']
    }
});


postSchema.pre<IPost>('save', function( next ) {
    this.created = new Date();
    next();
});

interface IPost extends Document{
    created: Date;
    titulo: string;
    mensaje: string;
    imag: string[];
    coords: string;
    usuario: string;
}

export const Post = model<IPost>('Post', postSchema);