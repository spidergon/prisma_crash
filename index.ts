import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: 'John Doe',
  //       email: 'john@gmail.com',
  //     },
  //   });
  // Get all users
  //   const users = await prisma.user.findMany({
  //     include: {
  //       articles: true,
  //     },
  //   });
  //
  // Create article and associate it with user
  //   const article = await prisma.article.create({
  //     data: {
  //       title: 'Johns First Article',
  //       body: 'This is Johns first article',
  //       author: {
  //         connect: {
  //           id: 1,
  //         },
  //       },
  //     },
  //   });
  //
  // Get all articles
  // const articles = await prisma.article.findMany();
  //
  // Create user and article and associate them
  //   const user = await prisma.user.create({
  //     data: {
  //       name: 'Sara Smith',
  //       email: 'sara@gmail.com',
  //       articles: {
  //         create: {
  //           title: 'Saras First Article',
  //           body: 'This is saras first article',
  //         },
  //       },
  //     },
  //   });
  //
  // Create another article
  //   const article = await prisma.article.create({
  //     data: {
  //       title: 'Sample Article',
  //       body: 'This is a sample article',
  //       author: {
  //         connect: {
  //           id: 2,
  //         },
  //       },
  //     },
  //   });
  //
  // Loop over Saras articles
  //   users.forEach((user) => {
  //     console.log(`User: ${user.name}, Email: ${user.email}`);
  //     console.log('Articles:');
  //     user.articles.forEach((article) => {
  //       console.log(`- Title: ${article.title}, Body: ${article.body}`);
  //     });
  //     console.log('\n');
  //   });
  // Udapte data
  // const user = await prisma.user.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     name: 'John Doe Jr',
  //   },
  // });
  //
  // Remive data
  // const article = await prisma.article.delete({
  //   where: {
  //     id: 2,
  //   },
  // });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
