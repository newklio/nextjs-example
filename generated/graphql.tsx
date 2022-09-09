import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Email: any;
  FilterLimit: any;
  FilterSkip: any;
  JSON: any;
  Username: any;
};

export type AdditionLinks = {
  __typename?: 'AdditionLinks';
  build_history?: Maybe<BuildHistory>;
};

export type AllowedMode = {
  __typename?: 'AllowedMode';
  creator?: Maybe<Scalars['Boolean']>;
  currentMode?: Maybe<Usermode>;
  developer?: Maybe<Scalars['Boolean']>;
  player?: Maybe<Scalars['Boolean']>;
  professional?: Maybe<Scalars['Boolean']>;
  student?: Maybe<Scalars['Boolean']>;
};

export type Artifact = {
  __typename?: 'Artifact';
  addition_links?: Maybe<AdditionLinks>;
  digest?: Maybe<Scalars['String']>;
  extra_attrs?: Maybe<ExtraAttrs>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  manifest_media_type?: Maybe<Scalars['String']>;
  media_type?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  pull_time?: Maybe<Scalars['Date']>;
  push_time?: Maybe<Scalars['Date']>;
  repository_id?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<ArtifactTag>>>;
  type?: Maybe<Scalars['String']>;
};

export type ArtifactConfig = {
  __typename?: 'ArtifactConfig';
  Entrypoint?: Maybe<Array<Maybe<Scalars['String']>>>;
  Env?: Maybe<Array<Maybe<Scalars['String']>>>;
  ExposedPorts?: Maybe<Scalars['JSON']>;
  WorkingDir?: Maybe<Scalars['String']>;
};

export type ArtifactTag = {
  __typename?: 'ArtifactTag';
  artifact_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  immutable?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  pull_time?: Maybe<Scalars['Date']>;
  push_time?: Maybe<Scalars['Date']>;
  repository_id?: Maybe<Scalars['Int']>;
  signed?: Maybe<Scalars['Boolean']>;
};

export type BaseOs = {
  __typename?: 'BaseOS';
  category?: Maybe<MachineCategory>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  playcount?: Maybe<Scalars['Int']>;
  repo?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  visibility?: Maybe<Visibility>;
};

export type BuildHistory = {
  __typename?: 'BuildHistory';
  absolute?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type CloudResource = {
  __typename?: 'CloudResource';
  /** Duration of access to the cloud resource */
  duration?: Maybe<Scalars['Int']>;
  /** Firewall rules of the user; use id to get specific firewall rule or filter to get specific output */
  firewallRules?: Maybe<Array<Maybe<FirewallRule>>>;
  /** Key pairs of the user; use id to get specific key pair or filter to get specific output */
  keyPairs?: Maybe<Array<Maybe<KeyPair>>>;
  /** Machines of the user; use id to get specific machine; use machines to get all machines */
  machines?: Maybe<Array<Maybe<Machine>>>;
  /** Name of the cloud resource */
  name?: Maybe<Scalars['String']>;
  /** Amount of RAM available to the cloud resource */
  ram?: Maybe<Scalars['Int']>;
  /** Unique identifier for the cloud resource */
  resourceId?: Maybe<Scalars['String']>;
  /** Snapshots of the user; use id to get specific snapshot or filter to get specific output */
  snapshots?: Maybe<Array<Maybe<Snapshot>>>;
  /** Amount of storage available to the cloud resource */
  storage?: Maybe<Scalars['Int']>;
  /** token for the cloud resource */
  token?: Maybe<Scalars['String']>;
};


export type CloudResourceFirewallRulesArgs = {
  filter?: InputMaybe<Filter>;
  id?: InputMaybe<Scalars['String']>;
};


export type CloudResourceKeyPairsArgs = {
  filter?: InputMaybe<Filter>;
  id?: InputMaybe<Scalars['String']>;
};


export type CloudResourceMachinesArgs = {
  filter?: InputMaybe<Filter>;
  id?: InputMaybe<Scalars['String']>;
};


export type CloudResourceSnapshotsArgs = {
  filter?: InputMaybe<Filter>;
  id?: InputMaybe<Scalars['String']>;
};

export type CloudResourceOps = {
  __typename?: 'CloudResourceOps';
  /** All FriewallRule operations */
  FirewallRuleOps?: Maybe<FirewallRuleOps>;
  /** All key pair operations */
  KeyPairOps?: Maybe<KeyPairOps>;
  /** All machine operations */
  MachineOps?: Maybe<MachineOps>;
  /** All snapshot operations */
  SnapshotOps?: Maybe<SnapshotOps>;
  containerOps?: Maybe<ContainerOps>;
};

export type CloudResourceResponse = {
  __typename?: 'CloudResourceResponse';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** Opstions of the cloud resource operation */
  payload?: Maybe<CloudResourceOps>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export type ContainerOps = {
  __typename?: 'ContainerOps';
  createContainer?: Maybe<CreateContainerResp>;
  deleteContainer?: Maybe<DeleteContainerResp>;
  launchContainer?: Maybe<LaunchContainerResp>;
  /** Lanuch NekiOS */
  launchNekiOS?: Maybe<LaunchContainerResp>;
  stopContainer?: Maybe<StopContainerResp>;
};


export type ContainerOpsCreateContainerArgs = {
  form: CreateContainerInp;
};


export type ContainerOpsDeleteContainerArgs = {
  id: Scalars['String'];
};


export type ContainerOpsLaunchContainerArgs = {
  id: Scalars['String'];
};


export type ContainerOpsLaunchNekiOsArgs = {
  id: Scalars['String'];
};


export type ContainerOpsStopContainerArgs = {
  id: Scalars['String'];
};

export type CreateUserInput = {
  address?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  converImg?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['Date']>;
  domain?: InputMaybe<UserDomain>;
  email: Scalars['Email'];
  fullname: Scalars['String'];
  gender?: InputMaybe<Gender>;
  phone?: InputMaybe<Scalars['String']>;
  pincode?: InputMaybe<Scalars['Int']>;
  secret: Scalars['String'];
  state?: InputMaybe<Scalars['String']>;
  university?: InputMaybe<Scalars['String']>;
  username: Scalars['Username'];
};

export type CveAllowlist = {
  __typename?: 'CveAllowlist';
  creation_time?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<Scalars['String']>>>;
  project_id?: Maybe<Scalars['Int']>;
  update_time?: Maybe<Scalars['Date']>;
};

export type DockerHubImage = {
  __typename?: 'DockerHubImage';
  creator?: Maybe<Scalars['Int']>;
  full_size?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  images?: Maybe<Array<Maybe<DockerImage>>>;
  last_updated?: Maybe<Scalars['Date']>;
  last_updater?: Maybe<Scalars['Int']>;
  last_updater_username?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  repository?: Maybe<Scalars['Int']>;
  tag_last_pulled?: Maybe<Scalars['Date']>;
  tag_last_pushed?: Maybe<Scalars['Date']>;
  tag_status?: Maybe<Scalars['String']>;
  v2?: Maybe<Scalars['Boolean']>;
};

export type Education = {
  __typename?: 'Education';
  /** Acheivements gained in the education */
  achievements?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Degree or certificate */
  degree?: Maybe<Scalars['String']>;
  /** Description of the education */
  description?: Maybe<Scalars['String']>;
  /** Domain of study */
  domainOfStudy?: Maybe<Scalars['String']>;
  /** End date of the education */
  endDate?: Maybe<Scalars['Date']>;
  /** Grade or score */
  grade?: Maybe<Scalars['Int']>;
  /** Unique identifier for the education record */
  id?: Maybe<Scalars['String']>;
  /** Institute where the education was taken */
  institute?: Maybe<Scalars['String']>;
  /** Start date of the education */
  startDate?: Maybe<Scalars['Date']>;
};

export type EducationInput = {
  /** achievements gained */
  achievements?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** degree of education */
  degree: Scalars['String'];
  /** description of education */
  description?: InputMaybe<Scalars['String']>;
  /** domain of study */
  domainOfStudy: Scalars['String'];
  /** end date of education */
  endDate: Scalars['Date'];
  /** grades earned */
  grade: Scalars['Int'];
  /** institute of education */
  institute: Scalars['String'];
  /** start date of education */
  startDate: Scalars['Date'];
};

export type EducationUpdateInput = {
  /** achievements gained */
  achievements?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** degree of education */
  degree?: InputMaybe<Scalars['String']>;
  /** description of education */
  description?: InputMaybe<Scalars['String']>;
  /** domain of study */
  domainOfStudy?: InputMaybe<Scalars['String']>;
  /** end date of education */
  endDate?: InputMaybe<Scalars['Date']>;
  /** grades earned */
  grade?: InputMaybe<Scalars['Int']>;
  /** institute of education */
  institute?: InputMaybe<Scalars['String']>;
  /** start date of education */
  startDate?: InputMaybe<Scalars['Date']>;
};

export enum EmploymentType {
  Contract = 'Contract',
  Freelancer = 'Freelancer',
  FullTime = 'FullTime',
  Internship = 'Internship',
  PartTime = 'PartTime',
  SelfEmployed = 'SelfEmployed'
}

export type Experience = {
  __typename?: 'Experience';
  /** Company name */
  company?: Maybe<Scalars['String']>;
  /** Description of the experience/Job */
  description?: Maybe<Scalars['String']>;
  /** Employement/Job type */
  employmentType?: Maybe<Scalars['String']>;
  /** End date of the experience/Job */
  endDate?: Maybe<Scalars['Date']>;
  /** Unique identifier for the experience record */
  id?: Maybe<Scalars['String']>;
  /** Industry of the experience/Job */
  industry?: Maybe<Scalars['String']>;
  /** Location of the experience/Job */
  location?: Maybe<Scalars['String']>;
  /** Position held */
  position?: Maybe<Scalars['String']>;
  /** responsibilities */
  responsibility_roles?: Maybe<Scalars['String']>;
  /** Skills gained */
  skills?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Start date of the experience/Job */
  startDate?: Maybe<Scalars['Date']>;
  /** Title of the experience/Job */
  title?: Maybe<Scalars['String']>;
  /** Status of the experience/Job */
  working?: Maybe<Scalars['Boolean']>;
};

export type ExperienceInput = {
  /** company name */
  company: Scalars['String'];
  /** description of the experience/job */
  description?: InputMaybe<Scalars['String']>;
  /** employment type */
  employmentType: EmploymentType;
  /** end date of the experience/job */
  endDate?: InputMaybe<Scalars['Date']>;
  /** industry of the experience/job */
  industry: Scalars['String'];
  /** location of the experience/job */
  location: Scalars['String'];
  /** position held */
  position: Scalars['String'];
  /** responsibilities */
  responsibility_roles: Scalars['String'];
  /** skills gained */
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** start date of the experience/job */
  startDate: Scalars['Date'];
  /** title of the experience/job */
  title: Scalars['String'];
  /** status of the experience/job */
  working: Scalars['Boolean'];
};

export type ExperienceUpdateInput = {
  /** company name */
  company?: InputMaybe<Scalars['String']>;
  /** description of the experience/job */
  description?: InputMaybe<Scalars['String']>;
  /** employment type */
  employmentType?: InputMaybe<EmploymentType>;
  /** end date of the experience/job */
  endDate?: InputMaybe<Scalars['Date']>;
  /** industry of the experience/job */
  industry?: InputMaybe<Scalars['String']>;
  /** location of the experience/job */
  location?: InputMaybe<Scalars['String']>;
  /** position held */
  position?: InputMaybe<Scalars['String']>;
  /** responsibilities */
  responsibility_roles?: InputMaybe<Scalars['String']>;
  /** skills gained */
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** start date of the experience/job */
  startDate?: InputMaybe<Scalars['Date']>;
  /** title of the experience/job */
  title?: InputMaybe<Scalars['String']>;
  /** status of the experience/job */
  working?: InputMaybe<Scalars['Boolean']>;
};

export type ExtraAttrs = {
  __typename?: 'ExtraAttrs';
  architecture?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  config?: Maybe<ArtifactConfig>;
  created?: Maybe<Scalars['String']>;
  os?: Maybe<Scalars['String']>;
};

export type Filter = {
  limit: Scalars['FilterLimit'];
  skip: Scalars['FilterSkip'];
};

export type FirewallRule = {
  __typename?: 'FirewallRule';
  /** Unique identifier for the firewall rule */
  id?: Maybe<Scalars['String']>;
  /** Inbound rules of the firewall rule */
  inbound?: Maybe<Scalars['JSON']>;
  /** Name of the firewall rule */
  name?: Maybe<Scalars['String']>;
  /** Outbound rules of the firewall rule */
  outbound?: Maybe<Scalars['JSON']>;
  /** Resource Id of the firewall rule */
  resource?: Maybe<Scalars['String']>;
  /** Tags of the firewall rule */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FirewallRuleOps = {
  __typename?: 'FirewallRuleOps';
  /** Create a firewallRule */
  createFirewallRule: FirewallRuleResp;
  /** Delete a firewallRule */
  deleteFirewallRule?: Maybe<FirewallRuleResp>;
  /** Update a firewallRule */
  updateFirewallRule: FirewallRuleResp;
};


export type FirewallRuleOpsCreateFirewallRuleArgs = {
  form: CreateFirewallRuleInput;
};


export type FirewallRuleOpsDeleteFirewallRuleArgs = {
  id: Scalars['String'];
};


export type FirewallRuleOpsUpdateFirewallRuleArgs = {
  form?: InputMaybe<UpdateFirewallRuleInput>;
  id: Scalars['String'];
};

export type FirewallRuleResp = {
  __typename?: 'FirewallRuleResp';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** if operation is successful, returns the firewall rule object */
  payload?: Maybe<FirewallRule>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Others = 'Others'
}

export type HarborProject = {
  __typename?: 'HarborProject';
  chart_count?: Maybe<Scalars['Int']>;
  content?: Maybe<Array<Maybe<ProjectContent>>>;
  creation_time?: Maybe<Scalars['Date']>;
  current_user_role_ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  cve_allowlist?: Maybe<CveAllowlist>;
  metadata?: Maybe<Metadata>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['Int']>;
  owner_name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  registry_id?: Maybe<Scalars['Int']>;
  repo_count?: Maybe<Scalars['Int']>;
  update_time?: Maybe<Scalars['Date']>;
};


export type HarborProjectContentArgs = {
  page?: InputMaybe<Scalars['Int']>;
  page_size?: InputMaybe<Scalars['Int']>;
};

export type KataContainer = {
  __typename?: 'KataContainer';
  cluster?: Maybe<Scalars['String']>;
  dead?: Maybe<Scalars['Boolean']>;
  dnsAddress?: Maybe<Scalars['String']>;
  exitCode?: Maybe<Scalars['Int']>;
  finishedAt?: Maybe<Scalars['Date']>;
  firewallRules?: Maybe<FirewallRule>;
  gateway?: Maybe<Scalars['String']>;
  hostname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  ipaddress?: Maybe<Scalars['String']>;
  /** Machine id */
  machine?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  node?: Maybe<Scalars['String']>;
  ram?: Maybe<Scalars['Int']>;
  running?: Maybe<Scalars['Boolean']>;
  startedAt?: Maybe<Scalars['Date']>;
};

export type KeyPairOps = {
  __typename?: 'KeyPairOps';
  /** Create a key pair */
  createKeyPair: KeyPairResp;
  /** Delete a key pair */
  deleteKeyPair: KeyPairResp;
  /** Update a key pair */
  updateKeyPair: KeyPairResp;
};


export type KeyPairOpsCreateKeyPairArgs = {
  form: CreateKeyPairInput;
};


export type KeyPairOpsDeleteKeyPairArgs = {
  id: Scalars['String'];
};


export type KeyPairOpsUpdateKeyPairArgs = {
  form: UpdateKeyPairInput;
  id: Scalars['String'];
};

export type KeyPairResp = {
  __typename?: 'KeyPairResp';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** if operation is successful, returns the key pair object */
  payload?: Maybe<KeyPair>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export type License_Certs = {
  __typename?: 'License_certs';
  /** credential id of the license/certification */
  credentialId?: Maybe<Scalars['String']>;
  /** credential url of the license/certification */
  credentialUrl?: Maybe<Scalars['String']>;
  /** Unique identifier for the license_certs record */
  id?: Maybe<Scalars['String']>;
  /** Issuer of the license/certification */
  issuedBy?: Maybe<Scalars['String']>;
  /** Date of issue of the license/certification */
  issuedDate?: Maybe<Scalars['Date']>;
  /** Name of the license/certification */
  name?: Maybe<Scalars['String']>;
  /** Validation date of the license/certification */
  validTill?: Maybe<Scalars['Date']>;
};

export type License_CertsInput = {
  /** credential id of the license/certification */
  credentialId: Scalars['String'];
  /** credential url of the license/certification */
  credentialUrl?: InputMaybe<Scalars['String']>;
  /** Issuer of the license/certification */
  issuedBy: Scalars['String'];
  /** Date of issue of the license/certification */
  issuedDate: Scalars['Date'];
  /** Name of the license/certification */
  name: Scalars['String'];
  /** Validation date of the license/certification */
  validTill?: InputMaybe<Scalars['Date']>;
};

export type License_CertsUpdateInput = {
  /** credential id of the license/certification */
  credentialId?: InputMaybe<Scalars['String']>;
  /** credential url of the license/certification */
  credentialUrl?: InputMaybe<Scalars['String']>;
  /** Issuer of the license/certification */
  issuedBy?: InputMaybe<Scalars['String']>;
  /** Date of issue of the license/certification */
  issuedDate?: InputMaybe<Scalars['Date']>;
  /** Name of the license/certification */
  name?: InputMaybe<Scalars['String']>;
  /** Validation date of the license/certification */
  validTill?: InputMaybe<Scalars['Date']>;
};

export type Machine = {
  __typename?: 'Machine';
  /** App version of the machine */
  appVersion?: Maybe<Scalars['String']>;
  /** Base OS of the machine */
  baseOS?: Maybe<BaseOs>;
  /** Base app of the machine */
  baseapp?: Maybe<Scalars['String']>;
  /** Category of the machine */
  category?: Maybe<MachineCategory>;
  /** Env of the machine */
  env?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Firewall rules of the machine */
  firewallRule?: Maybe<Scalars['String']>;
  /** Groups of the machine */
  group?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** IP address of the machine */
  ipaddress?: Maybe<Scalars['String']>;
  /** Key pairs of the machine */
  keyPairs?: Maybe<Array<Maybe<KeyPair>>>;
  /** Unique identifier for the machine */
  machineId?: Maybe<Scalars['String']>;
  machineRequest?: Maybe<Array<Maybe<MachineRequest>>>;
  /** Name of the machine */
  name?: Maybe<Scalars['String']>;
  /** Packages of the machine */
  packages?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Play count of the machine */
  playcount?: Maybe<Scalars['Int']>;
  /** expose port list */
  ports?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Progress of the machine */
  progress?: Maybe<Array<Maybe<MachineProgress>>>;
  /** RAM of the machine */
  ram?: Maybe<Scalars['Int']>;
  /** Status of the machine ready or not */
  ready?: Maybe<Scalars['Boolean']>;
  /** Repo of the machine */
  repo?: Maybe<Scalars['String']>;
  /** Resource of the machine */
  resource?: Maybe<Scalars['String']>;
  /** Storage of the machine */
  storage?: Maybe<Scalars['Int']>;
  /** Tags of the machine */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Visibility of the machine */
  visibility?: Maybe<Visibility>;
};


export type MachineProgressArgs = {
  filter?: InputMaybe<Filter>;
  id?: InputMaybe<Scalars['String']>;
};

export enum MachineCategory {
  Container = 'container',
  VirtualMachine = 'virtualMachine'
}

export type MachineInput = {
  /** App version of the machine */
  appVersion: Scalars['String'];
  /** Base OS id to be added to the machine */
  baseOS: Scalars['String'];
  /** Base app of the machine */
  baseapp: Scalars['String'];
  /** Category of the machine */
  category: MachineCategory;
  /** Env of the machine */
  env?: InputMaybe<Array<Scalars['String']>>;
  /** Firewall rule id to be added to the machine */
  firewallRule?: InputMaybe<Scalars['String']>;
  /** Groups of the machine */
  group?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** IP address of the machine */
  ipaddress: Scalars['String'];
  /** Key pairs ID to be added to the machine */
  keyPairs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** name of the machine */
  name: Scalars['String'];
  /** Packages of the machine */
  packages?: InputMaybe<Array<Scalars['String']>>;
  /** Play count of the machine */
  playcount?: InputMaybe<Scalars['Int']>;
  /** expose port list */
  ports?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** RAM of the machine */
  ram: Scalars['Int'];
  /** Storage of the machine */
  storage: Scalars['Int'];
  /** Tags of the machine */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Visibility of the machine */
  visibility: Visibility;
};

export type MachineOps = {
  __typename?: 'MachineOps';
  /** Create a machine */
  createMachine: MachineResp;
  /** Create a machine with NekiOS */
  createNekiOS?: Maybe<CreateNekiOsResp>;
  /** Delete a machine */
  deleteMachine: MachineResp;
  /** Delete machine progress */
  deleteMachineProgress: MachineProgressResp;
  /** Delete machine request */
  deleteMachineRequest: MachineRequestResp;
  deletePublish?: Maybe<PublishMachineRes>;
  publish?: Maybe<PublishMachineRes>;
  /** Update a machine */
  updateMachine: MachineResp;
  updatePublish?: Maybe<PublishMachineRes>;
};


export type MachineOpsCreateMachineArgs = {
  form: MachineInput;
};


export type MachineOpsCreateNekiOsArgs = {
  form: CreateNekiOsInput;
};


export type MachineOpsDeleteMachineArgs = {
  machineId: Scalars['String'];
};


export type MachineOpsDeleteMachineProgressArgs = {
  id: Array<Scalars['String']>;
  machine: Scalars['String'];
};


export type MachineOpsDeleteMachineRequestArgs = {
  id: Scalars['String'];
};


export type MachineOpsDeletePublishArgs = {
  id: Scalars['String'];
};


export type MachineOpsPublishArgs = {
  id: Scalars['String'];
  name: Scalars['String'];
  type: PublishMachineType;
};


export type MachineOpsUpdateMachineArgs = {
  form: UpdateMachineInput;
  machineId: Scalars['String'];
};


export type MachineOpsUpdatePublishArgs = {
  form?: InputMaybe<PublishMachineInp>;
  id: Scalars['String'];
};

export type MachineProgress = {
  __typename?: 'MachineProgress';
  /** ClusterId of the machine */
  ClusterId?: Maybe<Scalars['String']>;
  /** Code of the machine progress */
  Code?: Maybe<Scalars['Int']>;
  /** Error of the machine progress */
  Error?: Maybe<Scalars['String']>;
  /** Message of the machine progress */
  Message?: Maybe<Scalars['String']>;
  /** Node ID of the machine */
  NodeId?: Maybe<Scalars['String']>;
  /** Operation of the machine */
  Operation?: Maybe<Scalars['String']>;
  /** Repo of the image */
  Repo?: Maybe<Scalars['String']>;
  /** Stage of the machine progress */
  Stage?: Maybe<Stages>;
  /** Time of the machine progress */
  Time?: Maybe<Scalars['Date']>;
  /** Unique identifier for the machine progress */
  id?: Maybe<Scalars['String']>;
  /** ObjectId of the machine */
  machine?: Maybe<Scalars['String']>;
  /** ObjectId of the Snapshot */
  snapshot?: Maybe<Scalars['String']>;
};

export type MachineProgressResp = {
  __typename?: 'MachineProgressResp';
  /** Response code */
  code: Scalars['Int'];
  /** if operation is successful, returns the number of machine progresses deleted */
  deletedCount?: Maybe<Scalars['Int']>;
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export type MachineRequest = {
  __typename?: 'MachineRequest';
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  machine?: Maybe<Scalars['String']>;
  repo?: Maybe<Scalars['String']>;
  snapshot?: Maybe<Scalars['String']>;
  status?: Maybe<MachineRequestStatus>;
};

export type MachineRequestResp = {
  __typename?: 'MachineRequestResp';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** if operation is successful, returns the machine object */
  payload?: Maybe<MachineRequest>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export enum MachineRequestStatus {
  Failed = 'failed',
  Finished = 'finished',
  Started = 'started'
}

export type MachineResp = {
  __typename?: 'MachineResp';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** if operation is successful, returns the machine object */
  payload?: Maybe<Machine>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export type Metadata = {
  __typename?: 'Metadata';
  public?: Maybe<Scalars['String']>;
  retention_id?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** All Qualifications */
  Qualifications: QualificationsResponse;
  cloudResource?: Maybe<CloudResourceResponse>;
  createUser: CreateUserResp;
  deleteUser?: Maybe<DeleteUserResp>;
  login: LoginResp;
  projects?: Maybe<ProjectsResponse>;
  updateUser: UpdateUserResp;
};


export type MutationCreateUserArgs = {
  form: CreateUserInput;
};


export type MutationLoginArgs = {
  secret: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  form: UpdateUserInput;
};

export enum NatureOfEmployment {
  Contract = 'Contract',
  FullTime = 'FullTime',
  PartTime = 'PartTime'
}

export type NekiOs = {
  __typename?: 'NekiOS';
  /** App version of the machine */
  appVersion?: Maybe<Scalars['String']>;
  /** Base OS of the machine */
  baseOS?: Maybe<BaseOs>;
  /** Base app of the machine */
  baseapp?: Maybe<Scalars['String']>;
  /** Category of the machine */
  category?: Maybe<MachineCategory>;
  /** Container of a machine */
  container?: Maybe<KataContainer>;
  /** Firewall rules of the machine */
  firewallRule?: Maybe<Scalars['String']>;
  /** Groups of the machine */
  group?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** IP address of the machine */
  ipaddress?: Maybe<Scalars['String']>;
  /** Key pairs of the machine */
  keyPairs?: Maybe<Array<Maybe<KeyPair>>>;
  /** Unique identifier for the machine */
  machineId?: Maybe<Scalars['String']>;
  /** Name of the machine */
  name?: Maybe<Scalars['String']>;
  /** Play count of the machine */
  playcount?: Maybe<Scalars['Int']>;
  /** RAM of the machine */
  ram?: Maybe<Scalars['Int']>;
  /** Status of the machine ready or not */
  ready?: Maybe<Scalars['Boolean']>;
  /** Repo of the machine */
  repo?: Maybe<Scalars['String']>;
  /** Resource of the machine */
  resource?: Maybe<Scalars['String']>;
  /** Storage of the machine */
  storage?: Maybe<Scalars['Int']>;
  /** Tags of the machine */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Visibility of the machine */
  visibility?: Maybe<Visibility>;
};

export type Project = {
  __typename?: 'Project';
  /** Category of the project */
  category?: Maybe<Scalars['String']>;
  /** Container used to run the project */
  container?: Maybe<Scalars['String']>;
  /** Date the project was created */
  createdAt?: Maybe<Scalars['Date']>;
  /** Description of the project */
  description?: Maybe<Scalars['String']>;
  /** Framework used in the project */
  framework?: Maybe<Scalars['String']>;
  /** Git repository of the project */
  gitRepo?: Maybe<Scalars['String']>;
  /** Group of the project */
  group?: Maybe<Scalars['String']>;
  /** Unique identifier for the project */
  id?: Maybe<Scalars['String']>;
  /** Machine used to run the project */
  machine?: Maybe<Scalars['String']>;
  /** Owner of the project */
  owner?: Maybe<Scalars['String']>;
  /** Preview site of the project */
  preview?: Maybe<Scalars['String']>;
  /** Programming language used in the project */
  programLanguage?: Maybe<Scalars['String']>;
  /** Tags of the project */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Project Team */
  team?: Maybe<Team>;
  /** Template used in the project */
  template?: Maybe<Scalars['String']>;
  /** Thumbnail of the project */
  thumbnail?: Maybe<Scalars['String']>;
  /** Title of the project */
  title?: Maybe<Scalars['String']>;
  /** Version of the project */
  version?: Maybe<Scalars['String']>;
  /** Visibility of the project */
  visibility?: Maybe<Visibility>;
};

export type ProjectContent = {
  __typename?: 'ProjectContent';
  artifact?: Maybe<Array<Maybe<Artifact>>>;
  artifact_count?: Maybe<Scalars['Int']>;
  creation_time?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  pull_count?: Maybe<Scalars['Int']>;
  update_time?: Maybe<Scalars['Date']>;
};


export type ProjectContentArtifactArgs = {
  page: Scalars['Int'];
  page_size: Scalars['Int'];
};

export type ProjectInput = {
  /** Category of the project */
  category: Scalars['String'];
  /** Container ID used to run the project */
  container?: InputMaybe<Scalars['String']>;
  /** Description of the project */
  description?: InputMaybe<Scalars['String']>;
  /** Framework used in the project */
  framework?: InputMaybe<Scalars['String']>;
  /** Git repository of the project */
  gitRepo: Scalars['String'];
  /** Group of the project */
  group?: InputMaybe<Scalars['String']>;
  /** Machine ID used to run the project */
  machine?: InputMaybe<Scalars['String']>;
  /** Preview site of the project */
  preview?: InputMaybe<Scalars['String']>;
  /** Programming language used in the project */
  programLanguage: Scalars['String'];
  /** Tags of the project */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Template ID used in the project */
  template?: InputMaybe<Scalars['String']>;
  /** Thumbnail of the project */
  thumbnail?: InputMaybe<Scalars['String']>;
  /** Title of the project */
  title: Scalars['String'];
  /** Version of the project */
  version: Scalars['String'];
  /** Visibility of the project */
  visibility: Visibility;
};

export type ProjectOps = {
  __typename?: 'ProjectOps';
  /** Create a new project */
  createProject: ProjectResp;
  /** Delete a project */
  deleteProject: ProjectResp;
  /** Update a project */
  updateProject: ProjectResp;
};


export type ProjectOpsCreateProjectArgs = {
  form: ProjectInput;
};


export type ProjectOpsDeleteProjectArgs = {
  id: Scalars['String'];
};


export type ProjectOpsUpdateProjectArgs = {
  form: UpdateProjectInput;
  id: Scalars['String'];
};

export enum ProjectOwnership {
  /** Owner of the project */
  Owner = 'OWNER',
  /** Shared with the project */
  Shared = 'SHARED'
}

export type ProjectResp = {
  __typename?: 'ProjectResp';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** If operation was successful, returns the project */
  payload?: Maybe<Project>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export enum ProjectSite {
  Nekione = 'Nekione',
  Offsite = 'Offsite',
  Onsite = 'Onsite'
}

export enum ProjectStatus {
  Completed = 'Completed',
  Ongoing = 'Ongoing'
}

export type ProjectsOps = {
  __typename?: 'ProjectsOps';
  /** All project operations */
  projectOps?: Maybe<ProjectOps>;
  /** All TeamChatMessage operations */
  teamChatMessageOps?: Maybe<TeamChatMessageOps>;
  /** All TeamMember operations */
  teamMemberOps?: Maybe<TeamMemberOps>;
  /** All team operations */
  teamOps?: Maybe<TeamOps>;
};

export type ProjectsResponse = {
  __typename?: 'ProjectsResponse';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** Opstions of the project */
  payload?: Maybe<ProjectsOps>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export type PublishMachineInp = {
  appversion?: InputMaybe<Scalars['String']>;
  baseapp?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  visibility?: InputMaybe<Visibility>;
};

export enum PublishMachineType {
  Machine = 'machine',
  Snapshot = 'snapshot'
}

export type PublishedMachines = {
  __typename?: 'PublishedMachines';
  appversion?: Maybe<Scalars['String']>;
  baseOS?: Maybe<BaseOs>;
  baseapp?: Maybe<Scalars['String']>;
  category?: Maybe<MachineCategory>;
  description?: Maybe<Scalars['String']>;
  group?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  playcount?: Maybe<Scalars['Int']>;
  repo?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  visibility?: Maybe<Visibility>;
};

export type Qualifications = {
  __typename?: 'Qualifications';
  education?: Maybe<Array<Maybe<Education>>>;
  experience?: Maybe<Array<Maybe<Experience>>>;
  license_certs?: Maybe<Array<Maybe<License_Certs>>>;
  projects?: Maybe<Array<Maybe<ProfileProject>>>;
};


export type QualificationsEducationArgs = {
  filter?: InputMaybe<Filter>;
  id?: InputMaybe<Scalars['String']>;
};


export type QualificationsExperienceArgs = {
  filter?: InputMaybe<Filter>;
  id?: InputMaybe<Scalars['String']>;
};


export type QualificationsLicense_CertsArgs = {
  filter?: InputMaybe<Filter>;
  id?: InputMaybe<Scalars['String']>;
};


export type QualificationsProjectsArgs = {
  filter?: InputMaybe<Filter>;
  id?: InputMaybe<Scalars['String']>;
};

export type QualificationsOps = {
  __typename?: 'QualificationsOps';
  /** Add the education details of the user; returns the Education details; if the education already exists, returns error message. */
  createEducation: CreateEducationResponse;
  /** Add the experience details of the user. */
  createExperience: CreateExperienceResponse;
  /** Add the license/certification details of the user. */
  createLicense_certs: CreateLicense_CertsResponse;
  /** Add the project details of the user. */
  createProfileProject: CreateProfileProjectResponse;
  /** Delete the education details of the user. */
  deleteEducation: DeleteEducationResponse;
  /** Delete the experience details of the user. */
  deleteExperience: DeleteExperienceResponse;
  /** Delete the license/certification details of the user. */
  deleteLicense_certs?: Maybe<DeleteLicense_CertsResponse>;
  /** Delete the project details of the user. */
  deleteProfileProject: DeleteProfileProjectResponse;
  /** Update the education details of the user. */
  updateEducation: UpdateEducationResponse;
  /** Update the experience details of the user. */
  updateExperience: UpdateExperienceResponse;
  /** Update the license/certification details of the user. */
  updateLicense_certs: UpdateLicense_CertsResponse;
  /** Update the project details of the user. */
  updateProfileProject: UpdateProfileProjectResponse;
};


export type QualificationsOpsCreateEducationArgs = {
  form: EducationInput;
};


export type QualificationsOpsCreateExperienceArgs = {
  form: ExperienceInput;
};


export type QualificationsOpsCreateLicense_CertsArgs = {
  form: License_CertsInput;
};


export type QualificationsOpsCreateProfileProjectArgs = {
  form: ProfileProjectInput;
};


export type QualificationsOpsDeleteEducationArgs = {
  education: Scalars['String'];
};


export type QualificationsOpsDeleteExperienceArgs = {
  experience: Scalars['String'];
};


export type QualificationsOpsDeleteLicense_CertsArgs = {
  license_certs: Scalars['String'];
};


export type QualificationsOpsDeleteProfileProjectArgs = {
  project: Scalars['String'];
};


export type QualificationsOpsUpdateEducationArgs = {
  education: Scalars['String'];
  form: EducationUpdateInput;
};


export type QualificationsOpsUpdateExperienceArgs = {
  experience: Scalars['String'];
  form: ExperienceUpdateInput;
};


export type QualificationsOpsUpdateLicense_CertsArgs = {
  form: License_CertsUpdateInput;
  license_certs: Scalars['String'];
};


export type QualificationsOpsUpdateProfileProjectArgs = {
  form: ProfileProjectUpdateInput;
  project: Scalars['String'];
};

export type QualificationsResponse = {
  __typename?: 'QualificationsResponse';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** Opstions for the Qualifications operations */
  payload?: Maybe<QualificationsOps>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  /** check username and email is available; return true if exists */
  checkUsernameAndEmail?: Maybe<CheckUsernameAndEmailRes>;
  getContainers?: Maybe<GetContainersResp>;
  getDockerHubImages?: Maybe<GetDockerHubImageRes>;
  /**  Get harbor projects here name is the project name where repos are mananged e.g. library  */
  getHarborProjects?: Maybe<GetHarborProjectRes>;
  getProjects?: Maybe<GetProjectsResponse>;
  getPublishedMachines?: Maybe<GetPublishedMachinesRes>;
  getUser?: Maybe<GetUserResponse>;
  hello?: Maybe<Scalars['String']>;
  testMsgSend?: Maybe<TestMsgSendResponse>;
};


export type QueryCheckUsernameAndEmailArgs = {
  email?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type QueryGetContainersArgs = {
  filter: Filter;
  id?: InputMaybe<Scalars['String']>;
};


export type QueryGetDockerHubImagesArgs = {
  namespace: Scalars['String'];
  page: Scalars['Int'];
  repo: Scalars['String'];
  tag?: InputMaybe<Scalars['String']>;
};


export type QueryGetHarborProjectsArgs = {
  name?: InputMaybe<Scalars['String']>;
  page: Scalars['Int'];
  page_size: Scalars['Int'];
};


export type QueryGetProjectsArgs = {
  filter: Filter;
  projectOwnershipInput: ProjectOwnership;
};


export type QueryTestMsgSendArgs = {
  msg?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export enum ResourceType {
  Cloud = 'cloud',
  Local = 'local'
}

export type Snapshot = {
  __typename?: 'Snapshot';
  /** Base OS of the snapshot */
  baseOS?: Maybe<Scalars['String']>;
  /** domainName of the snapshot */
  domainName?: Maybe<Scalars['String']>;
  /** Firewall rule of the snapshot */
  firewallRule?: Maybe<Scalars['String']>;
  /** Unique identifier for the snapshot */
  id?: Maybe<Scalars['String']>;
  /** Key pairs ID of the snapshot */
  keyPairs?: Maybe<Array<Maybe<KeyPair>>>;
  /** machine id of the snapshot */
  machine?: Maybe<Scalars['String']>;
  machineRequest?: Maybe<Array<Maybe<MachineRequest>>>;
  /** Name of the snapshot */
  name?: Maybe<Scalars['String']>;
  /** Password of the snapshot */
  password?: Maybe<Scalars['String']>;
  /** Privacy type of the snapshot */
  privacyType?: Maybe<Visibility>;
  /** Ready status of the snapshot */
  ready?: Maybe<Scalars['Boolean']>;
  /** repo of the snapshot */
  repo?: Maybe<Scalars['String']>;
  /** Size of the snapshot */
  size?: Maybe<Scalars['Int']>;
  /** url for streaming of the snapshot */
  streamingUrl?: Maybe<Scalars['String']>;
  /** Username of the snapshot */
  username?: Maybe<Scalars['String']>;
};

export type SnapshotOps = {
  __typename?: 'SnapshotOps';
  /** Create a snapshot */
  createSnapshot: SnapshotResp;
  /** Delete a snapshot */
  deleteSnapshot: SnapshotResp;
  /** Update a snapshot */
  updateSnapshot: SnapshotResp;
};


export type SnapshotOpsCreateSnapshotArgs = {
  form: CreateSnapshotInput;
};


export type SnapshotOpsDeleteSnapshotArgs = {
  id: Scalars['String'];
};


export type SnapshotOpsUpdateSnapshotArgs = {
  form: UpdateSnapshotInput;
  id: Scalars['String'];
};

export type SnapshotResp = {
  __typename?: 'SnapshotResp';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** if operation is successful, returns the snapshot object */
  payload?: Maybe<Snapshot>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export enum Stages {
  Build = 'build',
  Commit = 'commit',
  Delete = 'delete',
  Getimages = 'getimages',
  Push = 'push'
}

export type Team = {
  __typename?: 'Team';
  /** team chat messages */
  chatMessages?: Maybe<Array<Maybe<TeamChatMessage>>>;
  /** Description of the team */
  description?: Maybe<Scalars['String']>;
  /** Unique identifier for the team */
  id?: Maybe<Scalars['String']>;
  /** user ID of the leader */
  leader?: Maybe<Scalars['String']>;
  /** Team Members */
  members?: Maybe<Array<Maybe<TeamMember>>>;
  /** Name of the team */
  name?: Maybe<Scalars['String']>;
  /** Project ID of the team */
  project?: Maybe<Scalars['String']>;
};


export type TeamChatMessagesArgs = {
  filter?: InputMaybe<Filter>;
  messageId?: InputMaybe<Scalars['String']>;
};

export type TeamChatMessage = {
  __typename?: 'TeamChatMessage';
  /** Date the message was sent */
  createdAt?: Maybe<Scalars['Date']>;
  /** Unique identifier for the chat message */
  id?: Maybe<Scalars['String']>;
  /** Team member ID who sent the message */
  memberId?: Maybe<Scalars['String']>;
  /** Message content */
  message?: Maybe<Scalars['String']>;
  /** Team ID where the message is */
  team?: Maybe<Scalars['String']>;
};

export type TeamChatMessageOps = {
  __typename?: 'TeamChatMessageOps';
  /** Create a new chat message */
  createTeamChatMessage: TeamChatMessageResp;
  /** Delete a chat message */
  deleteTeamChatMessage: TeamChatMessageResp;
};


export type TeamChatMessageOpsCreateTeamChatMessageArgs = {
  form: CreateTeamChatMessageInput;
};


export type TeamChatMessageOpsDeleteTeamChatMessageArgs = {
  id: Scalars['String'];
};

export type TeamChatMessageResp = {
  __typename?: 'TeamChatMessageResp';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** If operation was successful, returns the team chat message */
  payload?: Maybe<TeamChatMessage>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export type TeamMember = {
  __typename?: 'TeamMember';
  /** Access token of the member */
  accessToken?: Maybe<Scalars['String']>;
  /** expiry date of access token of the member */
  expiry?: Maybe<Scalars['Date']>;
  /** Unique identifier for the team member */
  id?: Maybe<Scalars['String']>;
  /** issue date of access token of the member */
  issueAt?: Maybe<Scalars['Date']>;
  /** role of the member */
  role?: Maybe<TeamMemberRole>;
  /** Team ID where the member is */
  team?: Maybe<Scalars['String']>;
  /** User ID of the member */
  user?: Maybe<Scalars['String']>;
};

export type TeamMemberOps = {
  __typename?: 'TeamMemberOps';
  /** Add a member to a team */
  createTeamMember: TeamMemberResp;
  /** Delete a member of a team */
  deleteTeamMember: TeamMemberResp;
  /** Update a member of a team */
  updateTeamMember: TeamMemberResp;
};


export type TeamMemberOpsCreateTeamMemberArgs = {
  form: CreateTeamMemberInput;
};


export type TeamMemberOpsDeleteTeamMemberArgs = {
  id: Scalars['String'];
};


export type TeamMemberOpsUpdateTeamMemberArgs = {
  form: UpdateTeamMemberInput;
  id: Scalars['String'];
};

export type TeamMemberResp = {
  __typename?: 'TeamMemberResp';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** If operation was successful, returns the team member */
  payload?: Maybe<TeamMember>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export enum TeamMemberRole {
  Editor = 'editor',
  Owner = 'owner',
  Viewer = 'viewer'
}

export type TeamOps = {
  __typename?: 'TeamOps';
  /** Create a new team */
  createTeam: TeamResp;
  /** Delete a team */
  deleteTeam: TeamResp;
  /** Update a team */
  updateTeam: TeamResp;
};


export type TeamOpsCreateTeamArgs = {
  form: CreateTeamInput;
};


export type TeamOpsDeleteTeamArgs = {
  id: Scalars['String'];
};


export type TeamOpsUpdateTeamArgs = {
  form: UpdateTeamInput;
  id: Scalars['String'];
};

export type TeamResp = {
  __typename?: 'TeamResp';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** If operation was successful, returns the team */
  payload?: Maybe<Team>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export type TestMsgSendResponse = {
  __typename?: 'TestMsgSendResponse';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateUserInput = {
  address?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['Int']>;
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  converImg?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['Date']>;
  domain?: InputMaybe<UserDomain>;
  fullname?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  phone?: InputMaybe<Scalars['String']>;
  pincode?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
  university?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  allowedMode?: Maybe<AllowedMode>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  cloudResource?: Maybe<CloudResource>;
  converImg?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  domain?: Maybe<UserDomain>;
  email?: Maybe<Scalars['Email']>;
  fullname?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  lastLogin?: Maybe<Scalars['Date']>;
  phone?: Maybe<Scalars['String']>;
  pincode?: Maybe<Scalars['Int']>;
  qualifications?: Maybe<Qualifications>;
  refreshToken?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  university?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  webFcmToken?: Maybe<Scalars['String']>;
};

export enum UserDomain {
  Developer = 'Developer',
  EthicalHacker = 'EthicalHacker'
}

export enum Usermode {
  Creator = 'creator',
  Developer = 'developer',
  Player = 'player',
  Professional = 'professional',
  Student = 'student'
}

export enum Visibility {
  MemberOnly = 'memberOnly',
  Private = 'private',
  Public = 'public'
}

export enum Zones {
  AsiaEast_1 = 'asia_east_1',
  AsiaSoutheast_2 = 'asia_southeast_2',
  EuCentral_3 = 'eu_central_3',
  RuCentral_1 = 'ru_central_1',
  UsEast_3 = 'us_east_3',
  UsWest_4 = 'us_west_4'
}

export enum AddTeamMemberRole {
  Editor = 'editor',
  Viewer = 'viewer'
}

export type CheckUsernameAndEmailRes = {
  __typename?: 'checkUsernameAndEmailRes';
  checkEmailExists?: Maybe<Scalars['Boolean']>;
  checkUsernameExists?: Maybe<Scalars['Boolean']>;
};

export type CreateContainerInp = {
  /** id for the firewall rules */
  firewallRules?: InputMaybe<Scalars['String']>;
  /** machine id to start container from */
  machine: Scalars['String'];
  /** hostname will e name-containerid */
  name: Scalars['String'];
  /** ram for the container */
  ram: Scalars['Int'];
  /** zone where container will be started */
  zone: Zones;
};

export type CreateContainerResp = {
  __typename?: 'createContainerResp';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  payload?: Maybe<KataContainer>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CreateEducationResponse = {
  __typename?: 'createEducationResponse';
  /** response code */
  code?: Maybe<Scalars['Int']>;
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** if operation successful, returns the Education details */
  payload?: Maybe<Education>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export type CreateExperienceResponse = {
  __typename?: 'createExperienceResponse';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** if operation successful, returns the Experience details */
  payload?: Maybe<Experience>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export type CreateFirewallRuleInput = {
  /** Inbound rules of the firewall rule */
  inbound?: InputMaybe<Scalars['JSON']>;
  /** Name of the firewall rule */
  name: Scalars['String'];
  /** Outbound rules of the firewall rule */
  outbound?: InputMaybe<Scalars['JSON']>;
  /** Tags of the firewall rule */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CreateKeyPairInput = {
  /** Fingerprint of the key pair */
  fingerprint: Scalars['String'];
  /** Name of the key pair */
  name: Scalars['String'];
  /** Private key of the key pair */
  privateKey: Scalars['String'];
  /** Public key of the key pair */
  publicKey: Scalars['String'];
  /** Tags of the key pair */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CreateLicense_CertsResponse = {
  __typename?: 'createLicense_certsResponse';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** if operation successful, returns the License_certs details */
  payload?: Maybe<License_Certs>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export type CreateNekiOsInput = {
  /** App version of the machine */
  appVersion: Scalars['String'];
  /** Base app of the machine */
  baseapp: Scalars['String'];
  /** Category of the machine */
  category: MachineCategory;
  /** hostname will be name-containerid */
  containerName: Scalars['String'];
  /** ram for the container */
  containerRam: Scalars['Int'];
  /** Firewall rule id to be added to the machine */
  firewallRule?: InputMaybe<Scalars['String']>;
  /** Groups of the machine */
  group?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** IP address of the machine */
  ipaddress: Scalars['String'];
  /** Key pairs ID to be added to the machine */
  keyPairs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** name of the machine */
  name: Scalars['String'];
  /** Play count of the machine */
  playcount?: InputMaybe<Scalars['Int']>;
  /** RAM of the machine */
  ram: Scalars['Int'];
  /** Storage of the machine */
  storage: Scalars['Int'];
  /** Tags of the machine */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Visibility of the machine */
  visibility: Visibility;
  /** zone where container will be started */
  zone: Zones;
};

export type CreateNekiOsResp = {
  __typename?: 'createNekiOSResp';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** if operation is successful, returns the NekiOS object */
  payload?: Maybe<NekiOs>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export type CreateProfileProjectResponse = {
  __typename?: 'createProfileProjectResponse';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** if operation successful, returns the Project details */
  payload?: Maybe<ProfileProject>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export type CreateSnapshotInput = {
  /** Container id of the snapshot */
  containerId: Scalars['String'];
  /** Firewall rule of the snapshot */
  firewallRule?: InputMaybe<Scalars['String']>;
  /** Key pairs ID to be added to the snapshot */
  keyPairs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** name for your snapshot */
  name: Scalars['String'];
  /** Password of the snapshot */
  password?: InputMaybe<Scalars['String']>;
  /** Privacy type of the snapshot */
  privacyType?: InputMaybe<Visibility>;
  /** Username of the snapshot */
  username?: InputMaybe<Scalars['String']>;
};

export type CreateTeamChatMessageInput = {
  /** Message content */
  message: Scalars['String'];
  /** Team ID where the message is */
  team: Scalars['String'];
};

export type CreateTeamInput = {
  /** Description of the team */
  description?: InputMaybe<Scalars['String']>;
  /** Name of the team */
  name: Scalars['String'];
  /** project ID of the team */
  project: Scalars['String'];
};

export type CreateTeamMemberInput = {
  /** Access token of the member */
  accessToken: Scalars['String'];
  /** expiry date of access token of the member */
  expiry?: InputMaybe<Scalars['Date']>;
  /** role of the member */
  role: AddTeamMemberRole;
  /** Team ID where the member is */
  team: Scalars['String'];
  /** User ID of the member */
  user: Scalars['String'];
};

export type CreateUserResp = {
  __typename?: 'createUserResp';
  accessToken?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  payload?: Maybe<User>;
  success?: Maybe<Scalars['Boolean']>;
};

export type DeleteContainerResp = {
  __typename?: 'deleteContainerResp';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  payload?: Maybe<KataContainer>;
  success?: Maybe<Scalars['Boolean']>;
};

export type DeleteEducationResponse = {
  __typename?: 'deleteEducationResponse';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** if operation successful, returns the Education details */
  payload?: Maybe<Education>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export type DeleteExperienceResponse = {
  __typename?: 'deleteExperienceResponse';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** if operation successful, returns the Experience details */
  payload?: Maybe<Experience>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export type DeleteLicense_CertsResponse = {
  __typename?: 'deleteLicense_certsResponse';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** if operation successful, returns the License_certs details */
  payload?: Maybe<License_Certs>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export type DeleteProfileProjectResponse = {
  __typename?: 'deleteProfileProjectResponse';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** if operation successful, returns the Project details */
  payload?: Maybe<ProfileProject>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export type DeleteUserResp = {
  __typename?: 'deleteUserResp';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type DockerImage = {
  __typename?: 'dockerImage';
  architecture?: Maybe<Scalars['String']>;
  digest?: Maybe<Scalars['String']>;
  features?: Maybe<Scalars['String']>;
  last_pulled?: Maybe<Scalars['Date']>;
  last_pushed?: Maybe<Scalars['Date']>;
  os?: Maybe<Scalars['String']>;
  os_features?: Maybe<Scalars['String']>;
  os_version?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
};

export type GetContainersResp = {
  __typename?: 'getContainersResp';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  payload?: Maybe<Array<Maybe<KataContainer>>>;
  success?: Maybe<Scalars['Boolean']>;
};

export type GetDockerHubImageRes = {
  __typename?: 'getDockerHubImageRes';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  payload?: Maybe<Array<Maybe<DockerHubImage>>>;
  success?: Maybe<Scalars['Boolean']>;
};

export type GetHarborProjectRes = {
  __typename?: 'getHarborProjectRes';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  payload?: Maybe<Array<Maybe<HarborProject>>>;
  success?: Maybe<Scalars['Boolean']>;
};

export type GetProjectsResponse = {
  __typename?: 'getProjectsResponse';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** If operation was successful, returns the projects */
  payload?: Maybe<Array<Maybe<Project>>>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export type GetPublishedMachinesRes = {
  __typename?: 'getPublishedMachinesRes';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  payload?: Maybe<Array<Maybe<PublishedMachines>>>;
  success?: Maybe<Scalars['Boolean']>;
};

export type GetUserResponse = {
  __typename?: 'getUserResponse';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  payload?: Maybe<User>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ImageByTagName = {
  __typename?: 'imageByTagName';
  count?: Maybe<Scalars['Int']>;
  creator?: Maybe<Scalars['Int']>;
  full_size?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  images?: Maybe<Array<Maybe<DockerImage>>>;
  last_updated?: Maybe<Scalars['Date']>;
  last_updater?: Maybe<Scalars['Int']>;
  last_updater_username?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  next?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['String']>;
  repository?: Maybe<Scalars['Int']>;
  results?: Maybe<Array<Maybe<ImageByTagName>>>;
  tag_last_pulled?: Maybe<Scalars['Date']>;
  tag_last_pushed?: Maybe<Scalars['Date']>;
  tag_status?: Maybe<Scalars['String']>;
  v2?: Maybe<Scalars['Boolean']>;
};

export type KeyPair = {
  __typename?: 'keyPair';
  /** Fingerprint of the key pair */
  fingerprint?: Maybe<Scalars['String']>;
  /** Unique identifier for the key pair */
  id?: Maybe<Scalars['String']>;
  /** Name of the key pair */
  name?: Maybe<Scalars['String']>;
  /** Private key of the key pair */
  privateKey?: Maybe<Scalars['String']>;
  /** Public key of the key pair */
  publicKey?: Maybe<Scalars['String']>;
  /** Resource Id of the key pair */
  resource?: Maybe<Scalars['String']>;
  /** Tags of the key pair */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type LaunchContainerResp = {
  __typename?: 'launchContainerResp';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  payload?: Maybe<KataContainer>;
  success?: Maybe<Scalars['Boolean']>;
};

export type LoginResp = {
  __typename?: 'loginResp';
  accessToken?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  payload?: Maybe<User>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ProfileProject = {
  __typename?: 'profileProject';
  /** Client name */
  client?: Maybe<Scalars['String']>;
  /** Description of the project */
  description?: Maybe<Scalars['String']>;
  /** End date of the project */
  endDate?: Maybe<Scalars['Date']>;
  /** Unique identifier for the project record */
  id?: Maybe<Scalars['String']>;
  /** Nature of the employment on the project */
  natureOfEmployment?: Maybe<NatureOfEmployment>;
  /** Project status */
  projectStatus?: Maybe<ProjectStatus>;
  /** Role of the user on the project */
  role?: Maybe<Scalars['String']>;
  /** Description of the role */
  roleDescription?: Maybe<Scalars['String']>;
  /** Site from where the project was taken */
  site?: Maybe<ProjectSite>;
  /** Skills gained */
  skills?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Start date of the project */
  startDate?: Maybe<Scalars['Date']>;
  /** Number of team members on the project */
  teamSize?: Maybe<Scalars['Int']>;
  /** Technologies used in the project */
  technologies?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the project */
  title?: Maybe<Scalars['String']>;
  /** URL link of the project */
  url?: Maybe<Scalars['String']>;
};

export type ProfileProjectInput = {
  /** Client name */
  client?: InputMaybe<Scalars['String']>;
  /** Description of the project */
  description: Scalars['String'];
  /** End date of the project */
  endDate?: InputMaybe<Scalars['Date']>;
  /** Nature of the employment on the project */
  natureOfEmployment: NatureOfEmployment;
  /** Project status */
  projectStatus: ProjectStatus;
  /** Role of the user on the project */
  role: Scalars['String'];
  /** Description of the role */
  roleDescription?: InputMaybe<Scalars['String']>;
  /** Site from where the project was taken */
  site: ProjectSite;
  /** Skills gained */
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Start date of the project */
  startDate: Scalars['Date'];
  /** Number of team members on the project */
  teamSize: Scalars['Int'];
  /** Technologies used in the project */
  technologies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Title of the project */
  title: Scalars['String'];
  /** URL link of the project */
  url?: InputMaybe<Scalars['String']>;
};

export type ProfileProjectUpdateInput = {
  /** Client name */
  client?: InputMaybe<Scalars['String']>;
  /** Description of the project */
  description?: InputMaybe<Scalars['String']>;
  /** End date of the project */
  endDate?: InputMaybe<Scalars['Date']>;
  /** Nature of the employment on the project */
  natureOfEmployment?: InputMaybe<NatureOfEmployment>;
  /** Project status */
  projectStatus?: InputMaybe<ProjectStatus>;
  /** Role of the user on the project */
  role?: InputMaybe<Scalars['String']>;
  /** Description of the role */
  roleDescription?: InputMaybe<Scalars['String']>;
  /** Site from where the project was taken */
  site?: InputMaybe<ProjectSite>;
  /** Skills gained */
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Start date of the project */
  startDate?: InputMaybe<Scalars['Date']>;
  /** Number of team members on the project */
  teamSize?: InputMaybe<Scalars['Int']>;
  /** Technologies used in the project */
  technologies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Title of the project */
  title?: InputMaybe<Scalars['String']>;
  /** URL link of the project */
  url?: InputMaybe<Scalars['String']>;
};

export type PublishMachineRes = {
  __typename?: 'publishMachineRes';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  payload?: Maybe<PublishedMachines>;
  success?: Maybe<Scalars['Boolean']>;
};

export type StopContainerResp = {
  __typename?: 'stopContainerResp';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  payload?: Maybe<KataContainer>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateEducationResponse = {
  __typename?: 'updateEducationResponse';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** if operation successful, returns the Education details */
  payload?: Maybe<Education>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export type UpdateExperienceResponse = {
  __typename?: 'updateExperienceResponse';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** if operation successful, returns the Experience details */
  payload?: Maybe<Experience>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export type UpdateFirewallRuleInput = {
  /** Inbound rules of the firewall rule */
  inbound?: InputMaybe<Scalars['JSON']>;
  /** Name of the firewall rule */
  name?: InputMaybe<Scalars['String']>;
  /** Outbound rules of the firewall rule */
  outbound?: InputMaybe<Scalars['JSON']>;
  /** Tags of the firewall rule */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UpdateKeyPairInput = {
  /** Name of the key pair */
  name?: InputMaybe<Scalars['String']>;
  /** Tags of the key pair */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UpdateLicense_CertsResponse = {
  __typename?: 'updateLicense_certsResponse';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** if operation successful, returns the License_certs details */
  payload?: Maybe<License_Certs>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export type UpdateMachineInput = {
  /** App version of the machine */
  appVersion?: InputMaybe<Scalars['String']>;
  /** Base OS id to be added to the machine */
  baseOS?: InputMaybe<Scalars['String']>;
  /** Base app of the machine */
  baseapp?: InputMaybe<Scalars['String']>;
  /** Category of the machine */
  category?: InputMaybe<MachineCategory>;
  /** Env of the machine */
  env?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Firewall rule id to be added to the machine */
  firewallRule?: InputMaybe<Scalars['String']>;
  /** Groups of the machine */
  group?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** IP address of the machine */
  ipaddress?: InputMaybe<Scalars['String']>;
  /** Key pairs ID to be added to the machine */
  keyPairs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** name of the machine */
  name?: InputMaybe<Scalars['String']>;
  /** Packages of the machine */
  packages?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Play count of the machine */
  playcount?: InputMaybe<Scalars['Int']>;
  /** expose port list */
  ports?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** RAM of the machine */
  ram?: InputMaybe<Scalars['Int']>;
  /** Storage of the machine */
  storage?: InputMaybe<Scalars['Int']>;
  /** Tags of the machine */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Visibility of the machine */
  visibility?: InputMaybe<Visibility>;
};

export type UpdateProfileProjectResponse = {
  __typename?: 'updateProfileProjectResponse';
  /** response code */
  code: Scalars['Int'];
  /** Message response from the server, can be success message or contains error cause */
  message: Scalars['String'];
  /** if operation successful, returns the Project details */
  payload?: Maybe<ProfileProject>;
  /** returns boolean if Operation successful or not */
  success: Scalars['Boolean'];
};

export type UpdateProjectInput = {
  /** Category of the project */
  category?: InputMaybe<Scalars['String']>;
  /** Container ID used to run the project */
  container?: InputMaybe<Scalars['String']>;
  /** Description of the project */
  description?: InputMaybe<Scalars['String']>;
  /** Framework used in the project */
  framework?: InputMaybe<Scalars['String']>;
  /** Git repository of the project */
  gitRepo?: InputMaybe<Scalars['String']>;
  /** Group of the project */
  group?: InputMaybe<Scalars['String']>;
  /** Machine ID used to run the project */
  machine?: InputMaybe<Scalars['String']>;
  /** Preview site of the project */
  preview?: InputMaybe<Scalars['String']>;
  /** Programming language used in the project */
  programLanguage?: InputMaybe<Scalars['String']>;
  /** Tags of the project */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Template ID used in the project */
  template?: InputMaybe<Scalars['String']>;
  /** Thumbnail of the project */
  thumbnail?: InputMaybe<Scalars['String']>;
  /** Title of the project */
  title?: InputMaybe<Scalars['String']>;
  /** Version of the project */
  version?: InputMaybe<Scalars['String']>;
  /** Visibility of the project */
  visibility?: InputMaybe<Visibility>;
};

export type UpdateSnapshotInput = {
  /** Base OS of the snapshot */
  baseOS?: InputMaybe<Scalars['String']>;
  /** domainName of the snapshot */
  domainName?: InputMaybe<Scalars['String']>;
  /** Firewall rule of the snapshot */
  firewallRule?: InputMaybe<Scalars['String']>;
  /** Key pairs ID to be added to the snapshot */
  keyPairs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** machine id of the snapshot */
  machine?: InputMaybe<Scalars['String']>;
  /** Password of the snapshot */
  password?: InputMaybe<Scalars['String']>;
  /** Privacy type of the snapshot */
  privacyType?: InputMaybe<Visibility>;
  /** repo of the snapshot */
  repo?: InputMaybe<Scalars['String']>;
  /** Size of the snapshot */
  size?: InputMaybe<Scalars['Int']>;
  /** url for streaming of the snapshot */
  streamingUrl?: InputMaybe<Scalars['String']>;
  /** Username of the snapshot */
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateTeamInput = {
  /** Description of the team */
  description?: InputMaybe<Scalars['String']>;
  /** Name of the team */
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateTeamMemberInput = {
  /** access token of the member */
  accessToken?: InputMaybe<Scalars['String']>;
  /** expiry date of access token of the member */
  expiry?: InputMaybe<Scalars['Date']>;
  /** role of the member */
  role?: InputMaybe<AddTeamMemberRole>;
};

export type UpdateUserResp = {
  __typename?: 'updateUserResp';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  payload?: Maybe<User>;
  success?: Maybe<Scalars['Boolean']>;
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  secret: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'loginResp', code?: number | null, success?: boolean | null, message?: string | null, accessToken?: string | null, payload?: { __typename?: 'User', uid?: string | null, username?: string | null, fullname?: string | null, phone?: string | null, gender?: Gender | null, address?: string | null, city?: string | null, state?: string | null, country?: string | null, university?: string | null, pincode?: number | null, age?: number | null, avatar?: string | null, converImg?: string | null, email?: any | null, bio?: string | null, dob?: any | null, webFcmToken?: string | null, refreshToken?: string | null, lastLogin?: any | null, domain?: UserDomain | null, allowedMode?: { __typename?: 'AllowedMode', creator?: boolean | null, professional?: boolean | null, student?: boolean | null, player?: boolean | null, developer?: boolean | null, currentMode?: Usermode | null } | null, cloudResource?: { __typename?: 'CloudResource', resourceId?: string | null, name?: string | null, token?: string | null, duration?: number | null, ram?: number | null, storage?: number | null } | null } | null } };

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello?: string | null };


export const LoginDocument = gql`
    mutation Login($username: String!, $secret: String!) {
  login(username: $username, secret: $secret) {
    code
    success
    message
    accessToken
    payload {
      uid
      username
      fullname
      phone
      gender
      address
      city
      state
      country
      university
      pincode
      age
      avatar
      converImg
      email
      bio
      dob
      allowedMode {
        creator
        professional
        student
        player
        developer
        currentMode
      }
      webFcmToken
      refreshToken
      lastLogin
      domain
      cloudResource {
        resourceId
        name
        token
        duration
        ram
        storage
      }
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      secret: // value for 'secret'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;