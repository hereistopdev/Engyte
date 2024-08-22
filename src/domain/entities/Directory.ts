export namespace Directory {

  export type NodeId = string

  export enum NodeType {
    folder = 'folder',
    file = 'file',
  }

  export interface Node {
    id: NodeId
    name: string
    /** Parent ID is Null when Node is the root */
    parentId: NodeId
    type: NodeType
    editedAt: EpochTimeStamp
    createdAt: EpochTimeStamp
  }

  export interface FileMetadata extends Node {
    type: NodeType.file
  }

  export interface FolderMetadata extends Node {
    type: NodeType.folder
  }

  export interface FileContent {
    id: FileMetadata['id']
    content: string
  }

  export type FileType = FileMetadata & FileContent
  export type FolderContent = (Directory.FileMetadata | Directory.FolderMetadata)[]

  export const RootNode: FolderMetadata = {
    type: NodeType.folder,
    id: 'home',
    name: 'Home',
    parentId: 'root',
    editedAt: 0,
    createdAt: 0
  }

  // export const RootNode: FolderMetadata = {
  //   type: NodeType.folder,
  //   id: '04cf0f2b-a439-498e-9505-f4c2d8552d29',
  //   name: 'Documents',
  //   parentId: 'e4448197-8462-4a20-82b6-5aa26b694f05',
  //   editedAt: 0,
  //   createdAt: 0
  // }

}