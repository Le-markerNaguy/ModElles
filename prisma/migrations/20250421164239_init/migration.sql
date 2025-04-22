-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telephone" TEXT,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "avatar" TEXT,
    "dateInscription" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Annonce" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titre" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "contenu" TEXT,
    "organisation" TEXT NOT NULL,
    "organisationId" TEXT,
    "lieu" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "dateFin" DATETIME,
    "deadline" DATETIME,
    "image" TEXT,
    "categories" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "vues" INTEGER NOT NULL DEFAULT 0,
    "details" JSONB,
    "auteurId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Annonce_auteurId_fkey" FOREIGN KEY ("auteurId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Candidature" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "annonceId" TEXT NOT NULL,
    "candidatId" TEXT NOT NULL,
    "message" TEXT,
    "cv" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Candidature_annonceId_fkey" FOREIGN KEY ("annonceId") REFERENCES "Annonce" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Candidature_candidatId_fkey" FOREIGN KEY ("candidatId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Rdv" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "professionnelId" TEXT,
    "date" DATETIME NOT NULL,
    "heure" TEXT NOT NULL,
    "motif" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Rdv_professionnelId_fkey" FOREIGN KEY ("professionnelId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Rdv_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Groupe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nom" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "horaire" TEXT NOT NULL,
    "lieu" TEXT NOT NULL,
    "placesMax" INTEGER NOT NULL,
    "placesDisponibles" INTEGER NOT NULL,
    "animateur" TEXT NOT NULL,
    "image" TEXT,
    "thematiques" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "link" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ContactUrgence" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "relation" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "ContactUrgence_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ressource" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "categorie" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "_GroupeMembres" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_GroupeMembres_A_fkey" FOREIGN KEY ("A") REFERENCES "Groupe" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_GroupeMembres_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "Annonce_auteurId_idx" ON "Annonce"("auteurId");

-- CreateIndex
CREATE INDEX "Annonce_type_idx" ON "Annonce"("type");

-- CreateIndex
CREATE INDEX "Annonce_status_idx" ON "Annonce"("status");

-- CreateIndex
CREATE INDEX "Candidature_annonceId_idx" ON "Candidature"("annonceId");

-- CreateIndex
CREATE INDEX "Candidature_candidatId_idx" ON "Candidature"("candidatId");

-- CreateIndex
CREATE INDEX "Rdv_userId_idx" ON "Rdv"("userId");

-- CreateIndex
CREATE INDEX "Rdv_professionnelId_idx" ON "Rdv"("professionnelId");

-- CreateIndex
CREATE INDEX "Notification_userId_idx" ON "Notification"("userId");

-- CreateIndex
CREATE INDEX "ContactUrgence_userId_idx" ON "ContactUrgence"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_GroupeMembres_AB_unique" ON "_GroupeMembres"("A", "B");

-- CreateIndex
CREATE INDEX "_GroupeMembres_B_index" ON "_GroupeMembres"("B");
